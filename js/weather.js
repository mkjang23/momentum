const API_KEY = "5c9c51606802c646e1cda4b4e41e1093";

function apiOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  // console.log(`위도: ${lat}, 경도: ${lon}`);
  const apiData = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
  console.log(apiData);
  fetch(apiData)
    .then((response) => response.json())
    .then((data) => {
        // const condition = data.weather[0].description;
        const condition = data.weather[0].main;
        const temperature = data.main.temp;
        const location = data.name;
        const country = data.sys.country;
                
        const icon = document.createElement("i");
        icon.setAttribute("class", "fas fa-map-marker-alt fa-xl");     
        const city = document.querySelector("#weather span:first-child").appendChild(icon);
        city.innerText = ` ${location} ${country}`;

        const weather = document.querySelector("#weather span:last-child");        
        weather.innerText = `${condition} ${temperature}℃`;
    });
}

function apiError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(apiOk, apiError);


// coord: {lon: 126.9662, lat: 37.48},…}
//   base: "stations"
//   clouds: {all: 75}
//     all: 75
//   cod: 200

// coord: {lon: 126.9662, lat: 37.48}
//     lat: 37.48
//     lon: 126.9662
//   dt: 1640580165
//   id: 6800035

// main: {temp: -4.47, feels_like: -8.96, temp_min: -4.54, temp_max: -3.47, pressure: 1030, humidity: 50}
//     feels_like: -8.96
//     humidity: 50
//     pressure: 1030
//     temp: -4.47
//     temp_max: -3.47
//     temp_min: -4.54
//   name: "Banpobondong"

// snow: {1h: 0.21}
//   1h: 0.21

// sys: {type: 1, id: 8105, country: "KR", sunrise: 1640558725, sunset: 1640593230}
//     country: "KR"
//     id: 8105
//     sunrise: 1640558725
//     sunset: 1640593230
//     type: 1
//   timezone: 32400
//   visibility: 10000

// weather: [{id: 600, main: "Snow", description: "light snow", icon: "13d"}]
//   0: {id: 600, main: "Snow", description: "light snow", icon: "13d"}
//     description: "light snow"
//     icon: "13d"
//     id: 600
//     main: "Snow"

// wind: {speed: 3.09, deg: 180}
//   deg: 180
//   speed: 3.09
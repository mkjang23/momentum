const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
const imgName = images[Math.floor(Math.random()*images.length)]

const imgTag = document.createElement("img");
imgTag.src=`img/${imgName}`;
// console.log(imgTag)

// document.body.appendChild(imgTag);
document.body.style.backgroundImage = `url(img/${imgName})`;  
// console.log(document.body.style.backgroundImage);
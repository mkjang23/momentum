

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    const username = loginInput.value;
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings(username);
}
function paintGreetings(username){
    let hello;
    const date = new Date();
    const hours = String(date.getHours());    
    if (hours>=6 && hours <12){
        hello = "Good morning,";    
    }
    else if(hours>=12 && hours <18){
        hello = "Good afternoon,";    
    }
    else if(hours>=18 && hours <24){
        hello = "Good evening,";    
    }
    else{
        hello = "Good night,";    
    }

    const icon = document.createElement("i");
    icon.setAttribute("class", "fas fa-backspace fa-xs");
    
    greeting.innerText = `${hello} ${username}. `;    
    greeting.appendChild(icon)  
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
    function del(event){
        localStorage.removeItem(USERNAME_KEY);
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        greeting.classList.add(HIDDEN_CLASSNAME);
        loginInput.value = '';
    }
    icon.addEventListener("click",del);
    
}

const seavedUsername = localStorage.getItem(USERNAME_KEY);
if (seavedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    paintGreetings(seavedUsername);
}

// Good morning, 6~12
// Good afternoon, 12~18
// Good evening, 18~24
// Good night, 24~6
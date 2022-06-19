const login = document.querySelector("#login");
const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#logInput");
const user = document.querySelector("#username");

const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);

    login.style.display = "none";
}

function paintGreetings(username){
    user.innerText = `Hello, ${username}!`
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

paintGreetings(savedUsername);

if (savedUsername === null) {
    login.addEventListener("submit", onLoginSubmit);
  } else {
    login.style.display = "none";
    paintGreetings(savedUsername);
  }
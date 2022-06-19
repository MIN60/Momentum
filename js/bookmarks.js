const googleForm = document.querySelector("#googleForm");
const googleSearch = document.querySelector("#gooSearch");
const gitForm = document.querySelector("#gitForm");
const gitSearch = document.querySelector("#gitSearch");


function handleGoogle(event){
    event.preventDefault();
    const gSearch = googleSearch.value;
    googleSearch.value="";
    window.open(`https://www.google.com/search?q=${gSearch}`);
}

function handleGit(event){
    event.preventDefault();
    const searchGit = gitSearch.value;
    gitSearch.value="";
    window.open(`https://github.com/search?q=${searchGit}`);
}



googleForm.addEventListener("submit", handleGoogle);
gitForm.addEventListener("submit", handleGit);

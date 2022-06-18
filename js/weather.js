//box2 날씨 박스 부분
const rocate = document.querySelector("#rocate");
const weatherIcon = document.querySelector("#weatherIcon");
const nowtemp = document.querySelector("#nowtemp");
const maxmin_temp = document.querySelector("#maxmin_temp");

const API_KEY = "7936a67affe0094bce8595b1779afbee";


function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const city = data.name;
        const country = data.sys.country;
        const weather = data.weather[0].main;
        const temp = data.main.temp;
        const min_temp = Math.ceil(data.main.temp_min);
        const max_temp = Math.ceil(data.main.temp_max);
        const selectIcon = data.weather[0].icon;
        const iconsrc = `img/icons/${selectIcon}.png`;

        rocate.innerText = `${country}/${city}`;
        weatherIcon.setAttribute('src', iconsrc);
        nowtemp.innerText=`${temp}°`;
        maxmin_temp.innerText = `최고 ${max_temp}°/최저 ${min_temp}°`;
    });

}



function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError);
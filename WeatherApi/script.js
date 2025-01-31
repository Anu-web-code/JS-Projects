const inputBox = document.querySelector(".inputBox");
const cloudImg = document.querySelector(".cloudImg");
const searchBtn = document.getElementById("searchBtn");
const deg = document.querySelector(".deg");
const clouds = document.querySelector(".clouds");
const humid = document.querySelector(".humid");
const rps = document.querySelector(".rps");
const box=document.querySelector(".box");


const sc = "https://icon-library.com/images/clouds-icon/clouds-icon-26.jpg";
const mist = "https://png.pngtree.com/png-vector/20240805/ourmid/pngtree-mysterious-foggy-mist-in-a-cloudy-landscape-ethereal-rising-through-the-png-image_13390859.png";
const Haze = "https://wallpapers.com/images/hd/smoky-fog-cloud-png-04302024-rg0vg03whkekd62n.png";
const brokenClouds = "https://i.pinimg.com/originals/ea/6c/8a/ea6c8ac4cf6655ffddab5b737bbe0b7c.png";
const clearSky = "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-1024.png";
const errImg="https://thumbs.dreamstime.com/b/not-found-icon-design-line-style-perfect-application-web-logo-presentation-template-not-found-icon-design-line-style-169941512.jpg";

document.addEventListener("DOMContentLoaded",()=>{
async function checkWeather(city) {
    const apiKey = "60ea19d92010efe3edb9123f16a82293"; // API Key
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
        const weatherData = await fetch(api).then(response => response.json());

       
        box.style.height="500px";
        cloudImg.style.display="block";
        document.querySelector(".humidity").style.display="block";
        document.querySelector(".speed").style.display="block";
        document.querySelector(".deg").style.display="block";
        document.querySelector(".temp").style.display="block";
        document.querySelector(".clouds").style.display="block";


        deg.innerHTML = `${Math.floor(weatherData.main.temp - 273.15)} ℃`;
        rps.innerHTML = `${weatherData.wind.speed} m/s`;
        humid.innerHTML = `${weatherData.main.humidity}%`;
        clouds.innerHTML = `${weatherData.weather[0].description}`;

        switch (weatherData.weather[0].main) {
            case "Scattered Clouds":
                cloudImg.src = `${sc}`;
                break;
            case "Mist":
                cloudImg.src = `${mist}`;
                break;
            case "Haze":
                cloudImg.src = `${Haze}`;
                break;
            case "Broken Clouds":
                cloudImg.src = `${brokenClouds}`;
                break;
            case "Clear Sky":
                cloudImg.src = `${clearSky}`;
                break;
            default:
                cloudImg.src = `${clearSky}`;
                break;
        }

        console.log(weatherData);
    } catch (error) {
        cloudImg.src=`${errImg}`
        deg.innerHTML="";
        clouds.innerHTML = "Enter a proper location 🫢";
        document.querySelector(".humidity").style.display="none";
        document.querySelector(".speed").style.display="none";
        console.error("Error fetching weather data:", error);
    }
}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    checkWeather(inputBox.value);
});
})
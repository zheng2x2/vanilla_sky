import './skycons.js';
import './config.js';
import './style.css';

window.addEventListener('load', () => {
    let long;
    let lat;

    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureSection = document.querySelector('.temperature');
    const temperatureSpan = document.querySelector('.temperature span');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            //console.log(position)
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `${config.proxy}https://api.darksky.net/forecast/${config.skyConsKey}/${lat},${long}`;
            fetch(api)
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    const {temperature, summary, icon} = data.currently;
                    //Set DOM Elements from the API
                    locationTimezone.textContent = data.timezone;
                    temperatureDegree.textContent = temperature;
                    temperatureDescription.textContent = summary;

                    //FORMULAR FOR CELSIUS
                    let celsius = (temperature - 32) * (5/9);

                    //Set Icon
                    setIcons(icon, document.querySelector('.icon'));
            
                    //Change temp to Celsius/Farenheit
                    temperatureSection.addEventListener('click', () => {
                        if(temperatureSpan.textContent === "F") {
                            temperatureSpan.textContent = "C";
                            temperatureDegree.textContent = Math.floor(celsius);
                        }else{
                            temperatureSpan.textContent = "F";
                            temperatureDegree.textContent = temperature;
                        }
                    });
                });
        });

    }else{
        h1.textContent = "Hey plz enable to get your location"
    }

    function setIcons(icon, iconID) {
        const skycons = new Skycons({ color : "white" });
        const currIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.add(iconID, currIcon);
        skycons.play();
        // return skycons.set(iconID, skycons[currIcon]);
    }

    function toggleDegree(celsius, temp) {
        
    }

});
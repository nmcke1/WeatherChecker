function getWeather() {
    var longitude = document.getElementById("longitude").value;
    var latitude = document.getElementById("latitude").value;
    console.log(longitude);
    console.log(latitude);
    
    alert("Your longitude is: " + longitude + " and your latitude " + latitude + "!!!")
    getWeatherForLocation(latitude, longitude)
}

function getWeatherForLocation(latitude, longitude) {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=&units=metric&mode=html')
        .then(function(response) {
            return response.text();
        })
        .then(function(myText) {
            console.log(myText);
            document.getElementById("weatherData").innerHTML=myText; 
        });
}
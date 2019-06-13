function getWeather() {
    var longitude = document.getElementById("longitude").value;
    var latitude = document.getElementById("latitude").value;
    console.log(longitude);
    console.log(latitude);
    
    alert("Your longitude is: " + longitude + " and your latitude " + latitude + "!!!")
    getWeatherForLocation(latitude, longitude)
    
}

function getWeatherForLocation(latitude, longitude) {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=f068cf2b97cce83602ca4bc9c1b180b5&units=metric&mode=json')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            document.getElementById("weatherData").innerHTML=JSON.stringify(myJson); 
            populateData(myJson)
        });
}

function populateData(myJson) {
    document.getElementById("desc").innerHTML=myJson.weather[0].description;
    document.getElementById("temp").innerHTML=myJson.main.temp + 'c';
    document.getElementById("pressure").innerHTML=myJson.main.pressure + ' millibars';
    document.getElementById("humidity").innerHTML="DIY"
    document.getElementById("windy").innerHTML="DIY"
    document.getElementById("cloud").innerHTML="DIY"
    document.getElementById("location").innerHTML="DIY"
    document.getElementById("sunup").innerHTML="DIY"
    document.getElementById("sundown").innerHTML="DIY"
    //document.getElementById("weatherpic").innerHTML=""
}
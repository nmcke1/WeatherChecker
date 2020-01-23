function getWeather() {
    var longitude = document.getElementById("longitude").value;
    var latitude = document.getElementById("latitude").value;
    console.log(longitude);
    console.log(latitude);
    alert("Your longitude is " + longitude + " and your latitude is " + latitude)
    getWeatherForLocation(latitude, longitude)
}

function getWeatherForLocation(latitude, longitude) {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=55a5610b80120161a285928165c46c57&units=metric&mode=json')
    

    .then(function(response){
        return response.json();
    })
    .then(function(myJson){
        console.log(myJson);
      //  document.getElementById("weatherData").innerHTML=JSON.stringify(myJson); 
        
        populateData(myJson)

        function populateData(myJson) {
            document.getElementById("desc").innerHTML=myJson.weather[0].description;
            document.getElementById("temp").innerHTML=myJson.main.temp + ' C';
            document.getElementById("pressure").innerHTML=myJson.main.pressure + ' millibars';
            document.getElementById("humidity").innerHTML=myJson.main.humidity + ' g/m3'
            document.getElementById("windy").innerHTML=myJson.wind.speed + ' mph'
            document.getElementById("cloud").innerHTML=myJson.clouds.all + ' %';
            document.getElementById("location").innerHTML=myJson.name;
            document.getElementById("sunup").innerHTML= new Date(myJson.sys.sunrise);    
            document.getElementById("sundown").innerHTML= new Date(myJson.sys.sunset);          
           
            var imageFileLocation = null;
            var imageFileAlt = null;

            if(myJson.weather[0].main == "Clouds"){
                 imageFileLocation ="./cloud.png"
                 imageFileAlt = "Cloud Pic"
            } else if (myJson.weather[0].main == "Sunny") {
              imageFileLocation ="./sun.png"
              imageFileAlt = "Sun Pic"
            }else if (myJson.weather[0].main == "Rain"){
              imageFileLocation ="./rain.png"
              imageFileAlt = "Rain Pic"
             }else if(myJson.weather[0].main == "Snow"){
             imageFileLocation ="./snow.png"
             imageFileAlt = "Snow Pic"
            }

          setImage(imageFileLocation, imageFileAlt); 
        }

        function setImage(fileLocation, altDescription) {
          var x = document.createElement("IMG");
          x.setAttribute("src", fileLocation);
          x.setAttribute("alt", altDescription);
          document.getElementById("weather").appendChild(x);
      }
    
    });
  }

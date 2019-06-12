# Starting Point

The starting point is an empty HTML file. We are going to build on top of this.

First we need to pull the code down from github. In the Git CMD program switch to the c drive if not already set:-

    c:

Next we are going to pull down the basic site from github.com.

    git config --global http.sslVerify false
    git clone https://github.com/DonFrog/WeatherChecker.git



# First Steps
Add a title so the tab in the browser has a proper name. In the HTML file, in the `<head>` section add a title tag:-

    <title>WeatherChecker v1.0</title>

Next we are going to use the CSS file to control page layout and looks.  First, we will change the background color. Open the map.css file. Add the following to the file:-

    body {  
	    background-color: lightblue;  
    }
Instead of lightblue, go to [https://www.quackit.com/css/css_color_codes.cfm](https://www.quackit.com/css/css_color_codes.cfm) and pick a colour. You can use:-
-   a name like red 
-   a HEX value - like #ff0000
-   an RGB value - like rgb(255,0,0)

Next - add the CSS file to the web page. In the `<head>` section add this tag:-

    <link rel="stylesheet" href="./map.css" />

# Adding a Heading
In the `<body>` section add the following to give us a large heading at the top of the page:-

    <h1>Get the Weather for Anywhere!</h1>
    
This should appear on the left of the page. 

Next, we want to center it on the page - so we will create a little snippet in the map.css file that will force any text using it to be moved to the center:-

    .center  {
	    text-align: center;
    }
We now need to update the `<h1>` tag we created earlier by adding a class property:-

    <h1 class="center">Get the Weather for Anywhere!</h1>

# Gathering Data
## Build a Form

We are going to add two text fields and a button to the page. Below the `<h1>` tag add the following to add some text and an input field for longitude.

    Enter longitude
    <input type="text" name="longitude" id="longitude">
Repeat the above for latitude.
Next add a button we will use to gather data:-

    <button id="submitBtn">Submit</button>

## Add CSS to form
Above "Enter longitude" add a `<div>` tag. 
Below the `<button>` tag add a closing `</div>` tag.
This should look like this:-

    <div>
	    Enter longitude
	    <input type="number" name="longitude" id="longitude">
	    Enter Latitude
	    <input type="number" name="latitude" id="latitude">
	    <button id="submitBtn">Submit</button>
    </div>
 Check you can only enter numbers in the fields.
 
Now update the `<div>` to add a class:-

    <div class='weatherForm'>
   
 Go to the map.css file and add the following below `.center`: -

     .weatherForm  {
	    background-color: whitesmoke;
	    border-style: solid;
	    border-color: black;
	    padding: 10px;
	    margin-left: 200px;
		margin-right: 200px;
    }
This will create a black border around the text fields and button, with an off-white background and some spacing (padding) around the fields.

## Add Javascript to Button
In the index.html page we need to use javascript to allow the button to perform an action. The first step is to add a link to the javascript file we will use. 

In the `<head>` section add the following:-

    <script type="text/javascript" src="weather.js" type="text/javascript"></script>
This tells the browser what the file is called, where it resides and the filetype.

Update the button to call javascript when clicked:-

    <button onclick="getWeather()" id="submitBtn">Submit</button>
So when the button is clicked on the webpage a javascript function called `getWeather()` is invoked.

In the weather.js file add the following:-

    function getWeather()  {
    	var longitude = document.getElementById("longitude").value;
    	var latitude = document.getElementById("latitude").value;
    	console.log(longitude);
    	console.log(latitude);
    	alert("Your longitude is: " + longitude + " and your latitude " + latitude + "!!!")
    }
  Now when you click the button, it should display an alert that shows any values added for longitude/latitude.
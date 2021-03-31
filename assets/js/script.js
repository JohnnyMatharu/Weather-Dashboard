var entry = 0;
document.getElementById("textEntryBtn").addEventListener("click", enterRequest);

function enterRequest(event){
    event.preventDefault();
entry = document.getElementById("textEntry").value;
console.log(entry);

var urlWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + entry + "&appid=1686d3ccdcbc85f85b97533207c961cf";
console.log(urlWeather);
 fetch(urlWeather).then(response => response.json()) 
   .then(data => {
     console.log(data);
     document.getElementById("currentCity").innerHTML = data.name;
     //enter date
     console.log(data.main.temp);
    document.getElementById("temperature").innerHTML = "Temperature: " + data.main.temp;
    document.getElementById("humidity").innerHTML = "Humidity: " + data.main.humidity;
    document.getElementById("windSpeed").innerHTML = "Wind Speed: " + data.wind.speed;
    //enter uv index from another site if possible
     
   }); 
   
 var urlForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + entry + "&appid=1686d3ccdcbc85f85b97533207c961cf";
console.log(urlForecast);
  fetch(urlForecast).then(response => response.json()) 
    .then(data => { 
      console.log(data);
      // change below
     console.log(data.main.temp);
    document.getElementById("dateForecastOne").innerHTML = "Date: " + data..;
    document.getElementById("temperatureForecastOne").innerHTML = "Temperature: " + data...;
    document.getElementById("humidityForecastOne").innerHTML = "Humidity: " + data...;

    document.getElementById("dateForecastTwo").innerHTML = "Date: " + data..;
    document.getElementById("temperatureForecastTwo").innerHTML = "Temperature: " + data...;
    document.getElementById("humidityForecastTwo").innerHTML = "Humidity: " + data...;
    
    document.getElementById("dateForecastThree").innerHTML = "Date: " + data..;
    document.getElementById("temperatureForecastThree").innerHTML = "Temperature: " + data...;
    document.getElementById("humidityForecastThree").innerHTML = "Humidity: " + data...;

    document.getElementById("dateForecastFour").innerHTML = "Date: " + data..;
    document.getElementById("temperatureForecastFour").innerHTML = "Temperature: " + data...;
    document.getElementById("humidityForecastFour").innerHTML = "Humidity: " + data...;

    document.getElementById("dateForecastFive").innerHTML = "Date: " + data..;
    document.getElementById("temperatureForecastFive").innerHTML = "Temperature: " + data...;
    document.getElementById("humidityForecastFive").innerHTML = "Humidity: " + data...;
   
  });

      //  document.getElementById("dailyForecast").innerHTML = data;
   };
//anotherFunction() to sort two types of data

//displayData2() current data

// displayData2() 5 days forecast

//{ document.getElementById("dailyWeather").innerHTML = data.main.temp});
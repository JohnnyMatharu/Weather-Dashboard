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
      // change below
     console.log(data.list[0].dt_txt);
     document.getElementById("currentDate").innerHTML = "Date: " + data.list[0].dt_txt; 
    //document.getElementById("dateForecastOne").innerHTML = "Date: " + data.list[8].dt_txt;
    //document.getElementById("temperatureForecastOne").innerHTML = "Temperature: " + data.list[8].main.temp;
    //document.getElementById("humidityForecastOne").innerHTML = "Humidity: " + data.list[8].main.humidity;

    //document.getElementById("dateForecastTwo").innerHTML = "Date: " + data.list[16].dt_txt;
    //document.getElementById("temperatureForecastTwo").innerHTML = "Temperature: " + data.list.[16].main.temp;
    //document.getElementById("humidityForecastTwo").innerHTML = "Humidity: " + data.list[16].main.humidity;
    
    //document.getElementById("dateForecastThree").innerHTML = "Date: " + data.list[24].dt_txt;
    //document.getElementById("temperatureForecastThree").innerHTML = "Temperature: " + data.list[24].main.temp;
    //document.getElementById("humidityForecastThree").innerHTML = "Humidity: " + data.list[24].main.humidity;

    //document.getElementById("dateForecastFour").innerHTML = "Date: " + data.list[32].dt_txt;
    //document.getElementById("temperatureForecastFour").innerHTML = "Temperature: " + data.list[32].main.temp;
    //document.getElementById("humidityForecastFour").innerHTML = "Humidity: " + data.list[32].main.humidity;

    //document.getElementById("dateForecastFive").innerHTML = "Date: " + data.list[40].dt_txt;
    //document.getElementById("temperatureForecastFive").innerHTML = "Temperature: " + data.list[40].main.temp;
    //document.getElementById("humidityForecastFive").innerHTML = "Humidity: " + data.list[40].main.humidity;
   
  });

      //  document.getElementById("dailyForecast").innerHTML = data;
   };
//anotherFunction() to sort two types of data

//displayData2() current data

// displayData2() 5 days forecast

//{ document.getElementById("dailyWeather").innerHTML = data.main.temp});
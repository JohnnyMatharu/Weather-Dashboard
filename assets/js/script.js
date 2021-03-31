var entry = 0;
document.getElementById("textEntryBtn").addEventListener("click", enterRequest);

function enterRequest(event){
    event.preventDefault();
entry = document.getElementById("textCityEntry").value;
console.log(entry);
//entryUV = document.getElementById("textProvinceEntry").value;

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
   
var urlUV = "https://api.weatherbit.io/v2.0/current?&city=" + entry + "&key=109cad5ca78c416a9cb53bd3881be245";
//var urlUV = "https://api.weatherbit.io/v2.0/current?&city=" + entry + "," + entryUV + "&key=109cad5ca78c416a9cb53bd3881be245";
   console.log(urlUV);
    fetch(urlUV).then(response => response.json()) 
      .then(data => {
        console.log(data.data[0].uv);
        document.getElementById("uv").innerHTML = "UV Index: " + data.data[0].uv;
        //enter date
      }); 





 var urlForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + entry + "&appid=1686d3ccdcbc85f85b97533207c961cf";
console.log(urlForecast);
  fetch(urlForecast).then(response => response.json()) 
    .then(data => { 
      // change below
     console.log(data.list[0].dt_txt);
     var DateTime = luxon.DateTime;
     var date = (DateTime.now().toFormat("yyyy/MM/dd"));
     document.getElementById("currentDate").innerHTML = date;
     // document.getElementById("currentDate").innerHTML = "Date: " + data.list[0].dt_txt; 
    document.getElementById("dateForecastOne").innerHTML = "Date & time: " + data.list[6].dt_txt;
    document.getElementById("temperatureForecastOne").innerHTML = "Temperature: " + data.list[6].main.temp;
    document.getElementById("humidityForecastOne").innerHTML = "Humidity: " + data.list[6].main.humidity;

    document.getElementById("dateForecastTwo").innerHTML = "Date & time: " + data.list[14].dt_txt;
    document.getElementById("temperatureForecastTwo").innerHTML = "Temperature: " + data.list[14].main.temp;
    document.getElementById("humidityForecastTwo").innerHTML = "Humidity: " + data.list[14].main.humidity;
    
    document.getElementById("dateForecastThree").innerHTML = "Date & time: " + data.list[22].dt_txt;
    document.getElementById("temperatureForecastThree").innerHTML = "Temperature: " + data.list[22].main.temp;
    document.getElementById("humidityForecastThree").innerHTML = "Humidity: " + data.list[22].main.humidity;

    document.getElementById("dateForecastFour").innerHTML = "Date & time: " + data.list[30].dt_txt;
    document.getElementById("temperatureForecastFour").innerHTML = "Temperature: " + data.list[30].main.temp;
    document.getElementById("humidityForecastFour").innerHTML = "Humidity: " + data.list[30].main.humidity;
    
    document.getElementById("dateForecastFive").innerHTML = "Date & time: " + data.list[38].dt_txt;
    document.getElementById("temperatureForecastFive").innerHTML = "Temperature: " + data.list[38].main.temp;
    document.getElementById("humidityForecastFive").innerHTML = "Humidity: " + data.list[38].main.humidity;
   
  });

      //  document.getElementById("dailyForecast").innerHTML = data;
   };
//anotherFunction() to sort two types of data

//displayData2() current data

// displayData2() 5 days forecast

//{ document.getElementById("dailyWeather").innerHTML = data.main.temp});
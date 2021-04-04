var displayArr = JSON.parse(localStorage.getItem("cityArray")) || [];
console.log(displayArr);

//upto here all working fine, issue below and above var entry



for( i=0; i < displayArr.length; i++)
{

const list = document.getElementById("searchHistory");

let newLine = document.createElement('button');

newLine.textContent = displayArr[i];

newLine.id = displayArr[i];
//new code
newLine.addEventListener("click", (ev) => historyWeather(ev.target.textContent));
//new code
list.appendChild(newLine);

}
function historyWeather(displayLine){
  let histEntry = displayLine;
 
   //entryUV = document.getElementById("textProvinceEntry").value;
  
  var urlWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + histEntry + "&appid=1686d3ccdcbc85f85b97533207c961cf";
   console.log(urlWeather);
    fetch(urlWeather).then(response => response.json()) 
      .then(data => {
        console.log(data);
        document.getElementById("currentCity").innerHTML = data.name;
        //enter date
        //console.log(data.main.temp);
       document.getElementById("temperature").innerHTML = "Temperature: " + data.main.temp;
       document.getElementById("humidity").innerHTML = "Humidity: " + data.main.humidity;
       document.getElementById("windSpeed").innerHTML = "Wind Speed: " + data.wind.speed;
       //enter uv index from another site if possible
       
     }); 
     
   var urlUV = "https://api.weatherbit.io/v2.0/current?&city=" + histEntry + "&key=109cad5ca78c416a9cb53bd3881be245";
   //var urlUV = "https://api.weatherbit.io/v2.0/current?&city=" + entry + "," + entryUV + "&key=109cad5ca78c416a9cb53bd3881be245";
      console.log(urlUV);
       fetch(urlUV).then(response => response.json()) 
         .then(data => {
           console.log(data.data[0].uv);
           document.getElementById("uv").innerHTML = "UV Index: " + data.data[0].uv;
           var uvIndex = Math.trunc(data.data[0].uv);
console.log(uvIndex);


           switch (uvIndex) {
           
           case 0:
           $("#uv").addClass("bg-success").removeClass("uvSection").removeClass("bg-warning").removeClass("bg-danger");
            break;
           case 1:
            $("#uv").addClass("bg-success").removeClass("uvSection").removeClass("bg-warning").removeClass("bg-danger");
            break;
           case 2:
            $("#uv").addClass("bg-success").removeClass("uvSection").removeClass("bg-warning").removeClass("bg-danger");
            break;
           case 3:
            $("#uv").addClass("bg-warning").removeClass("uvSection").removeClass("bg-success").removeClass("bg-danger");
            break;
           case 4:
            $("#uv").addClass("bg-warning").removeClass("uvSection").removeClass("bg-success").removeClass("bg-danger");
            break;
           case 5:
            $("#uv").addClass("bg-warning").removeClass("uvSection").removeClass("bg-success").removeClass("bg-danger");
            break;
           case 6:
            $("#uv").addClass("bg-warning").removeClass("uvSection").removeClass("bg-success").removeClass("bg-danger");
            break;
           case 7:
            $("#uv").addClass("bg-warning").removeClass("uvSection").removeClass("bg-success").removeClass("bg-danger");
            break;
           case 8:
            $("#uv").addClass("bg-danger").removeClass("uvSection").removeClass("bg-success").removeClass("bg-warning");
            break;
           case 9:
            $("#uv").addClass("bg-danger").removeClass("uvSection").removeClass("bg-success").removeClass("bg-warning");
            break;
           case 10: 
            $("#uv").addClass("bg-danger").removeClass("uvSection").removeClass("bg-success").removeClass("bg-warning");
            break;
           }
           //enter date
         }); 

    var urlForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + histEntry + "&appid=1686d3ccdcbc85f85b97533207c961cf";
   console.log(urlForecast);
     fetch(urlForecast).then(response => response.json()) 
       .then(data => { 
         // change below
      //  console.log(data.list[0].dt_txt);
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
};

//var displayLineFixed = JSON.parse(localStorage.getItem("cityName")) || [];
//document.getElementById("searchHistory").innerHTML=displayLineFixed;

var entry = 0;
let entryArr = [];
document.getElementById("textEntryBtn").addEventListener("click", enterRequest);

function enterRequest(event){
    event.preventDefault();
entry = document.getElementById("textCityEntry").value;

entryArr.push(entry);
console.log(entryArr);
localStorage.setItem("cityName",JSON.stringify(entry));
localStorage.setItem("cityArray",JSON.stringify(entryArr));

var displayLine = JSON.parse(localStorage.getItem("cityName")) || [];

const list = document.getElementById("searchHistory");

let newLine = document.createElement('button');

 

newLine.textContent = displayLine;
console.log(newLine.textContent);
list.appendChild(newLine);
console.log(newLine.textContent);
newLine.addEventListener("click", (ev) => historyWeather(ev.target.textContent));



executeWeather();

};


function executeWeather ()
{
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
        console.log(data.data[0].weather.description);
        var weatherCondition = data.data[0].weather.description;
//Use above command for search of weather description for icon/picture display

switch (weatherCondition) {
           
case 'Clear sky':
document.getElementById("icon").innerHTML = "<i class='far fa-sun'></i>";

case 'Overcast Clouds':
document.getElementById("icon").innerHTML = "<i class='fas fa-cloud'></i>";

case 'Overcast clouds':
document.getElementById("icon").innerHTML = "<i class='fas fa-cloud'></i>";

case 'Light rain':
document.getElementById("icon").innerHTML = "<i class='fas fa-cloud-sun-rain'></i>";

case 'Few Clouds': 
document.getElementById("icon").innerHTML = "<i class='fas fa-cloud-sun'></i>";

case 'Few clouds': 
document.getElementById("icon").innerHTML = "<i class='fas fa-cloud-sun'></i>";

case 'Scattered Clouds':
document.getElementById("icon").innerHTML = "<i class='fas fa-cloud-sun'></i>";

case 'Scattered clouds':
document.getElementById("icon").innerHTML = "<i class='fas fa-cloud-sun'></i>";

case 'Heavy rain':
document.getElementById("icon").innerHTML = "<i class='fas fa-cloud-showers-heavy'></i>";

case 'Light rain':
document.getElementById("icon").innerHTML = "<i class='fas fa-cloud-rain'></i>";

};

document.getElementById("uv").innerHTML = "UV Index: " + data.data[0].uv;
        //enter date
        var uvIndex = Math.trunc(data.data[0].uv);
        console.log(uvIndex);
        
        switch (uvIndex) {
           
          case 0:
          $("#uv").addClass("bg-success").removeClass("uvSection").removeClass("bg-warning").removeClass("bg-danger");
           break;
          case 1:
           $("#uv").addClass("bg-success").removeClass("uvSection").removeClass("bg-warning").removeClass("bg-danger");
           break;
          case 2:
           $("#uv").addClass("bg-success").removeClass("uvSection").removeClass("bg-warning").removeClass("bg-danger");
           break;
          case 3:
           $("#uv").addClass("bg-warning").removeClass("uvSection").removeClass("bg-success").removeClass("bg-danger");
           break;
          case 4:
           $("#uv").addClass("bg-warning").removeClass("uvSection").removeClass("bg-success").removeClass("bg-danger");
           break;
          case 5:
           $("#uv").addClass("bg-warning").removeClass("uvSection").removeClass("bg-success").removeClass("bg-danger");
           break;
          case 6:
           $("#uv").addClass("bg-warning").removeClass("uvSection").removeClass("bg-success").removeClass("bg-danger");
           break;
          case 7:
           $("#uv").addClass("bg-warning").removeClass("uvSection").removeClass("bg-success").removeClass("bg-danger");
           break;
          case 8:
           $("#uv").addClass("bg-danger").removeClass("uvSection").removeClass("bg-success").removeClass("bg-warning");
           break;
          case 9:
           $("#uv").addClass("bg-danger").removeClass("uvSection").removeClass("bg-success").removeClass("bg-warning");
           break;
          case 10: 
           $("#uv").addClass("bg-danger").removeClass("uvSection").removeClass("bg-success").removeClass("bg-warning");
           break;
          }

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
};
      //  document.getElementById("dailyForecast").innerHTML = data;


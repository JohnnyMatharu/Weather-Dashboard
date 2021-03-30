var entry = 0;
document.getElementById("textEntryBtn").addEventListener("click", enterRequest);

function enterRequest(){
entry = document.getElementById("textEntry").value;
console.log(entry);

var url = "https://api.openweathermap.org/data/2.5/weather?q=" + entry + "&appid=1686d3ccdcbc85f85b97533207c961cf";
console.log(url);
 fetch(url).then(response => response.json()) 
   .then(data => console.log(data)); 
     console.log(data);
 
 
 
 
 
     //   document.getElementById("dailyWeather").innerHTML = data;
//  document.getElementById("dailyForecast").innerHTML = data;
   };


//anotherFunction() to sort two types of data

//displayData2() current data

// displayData2() 5 days forecast





var entry = 0;
document.getElementById("textEntryBtn").addEventListener("click", enterRequest);

function enterRequest(){
entry = document.getElementById("textEntry").value;
console.log(entry);
var getUserDate = function(userInput) {
  var url = "api.openweathermap.org/data/2.5/weather?q=" + entry + "&appid={1686d3ccdcbc85f85b97533207c961cf}";
fetch(url).then(function(response) {
    response.json().then(function(data) {
     console.log(data);
    //   document.getElementById("dailyWeather").innerHTML = data;
//  document.getElementById("dailyForecast").innerHTML = data;
     });
   });
 };
}


//anotherFunction() to sort two types of data

//displayData2() current data

// displayData2() 5 days forecast





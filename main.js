// JSONP function + callback
function getJSONP(url, cbName){
  var $script = document.createElement('script');
  $script.src = url + '?callback=' + cbName;
  document.body.appendChild($script);
}

function myAwesomeFunction(data){ 
  // Loop over JSON data
  for (var i = 0; i < 5; i++){
    var day = data.forecast.simpleforecast.forecastday[i].date.weekday;

    var highTemp = data.forecast.simpleforecast.forecastday[i].high.fahrenheit;

    var lowTemp = data.forecast.simpleforecast.forecastday[i].low.fahrenheit;
    
  function addItemToUl(data){
    var $ulGrabber = document.querySelector('#fiveDays'); 
    var $li = document.createElement('li');
    $li.innerHTML =  day + "  " + "High: " + highTemp + "  Low: " + lowTemp;
    $ulGrabber.appendChild($li);
  }
    addItemToUl(); 
  }
}


document.addEventListener("DOMContentLoaded", function(){      
  // Add event listener to 'click' on Get Weather button
  var $weatherButton = document.getElementById("submit");
  $weatherButton.addEventListener("click", function(){
    document.getElementById("fiveDays").innerHTML = "";
    // Grab user input (the zip code)
    var $zipInput = document.getElementById("zipInput").value;
    if ($zipInput.length === 5){
      // Display this Zip Code's location (San Fran, Nashville, etc)
      var url = 'http://api.wunderground.com/api/93c1cec992a886ae/forecast10day/q/' + $zipInput + '.json';
      getJSONP(url, 'myAwesomeFunction');
    } else {
      alert("Zip Code must be 5 integer digits!");
    }
  });
});

// To Do Before Starting GeoLocation
  // Improve if / else statement




// JSONP function + callback

var objectInfoz;

function getJSONP(url, cbName){
  var $script = document.createElement('script');
  $script.src = url + '?callback=' + cbName;
  document.body.appendChild($script);
}

function addItemToUl(item){
  var day = item.date.weekday;
  var highTemp = item.high.fahrenheit;
  var lowTemp = item.low.fahrenheit;
  var $ulGrabber = document.querySelector('#fiveDays'); 
  var $li = document.createElement('li');
  $li.innerHTML =  day + "  " + "High: " + highTemp + "  Low: " + lowTemp;
  $ulGrabber.appendChild($li);
  document.getElementById("city").innerHTML = currentCity;
}


function weatherFunction(data){ 
  objectInfoz = data;
  var currentCity = data.current_observation.display_location.full;
  for (var i = 0; i < 5; i++){
    addItemToUl(data.forecast.simpleforecast.forecastday[i]); 
  }
}

// Page load
document.addEventListener("DOMContentLoaded", function(){      
  // Add event listener to 'click' on Get Weather button
  var $weatherButton = document.getElementById("submit");
  $weatherButton.addEventListener("click", function(){
    document.getElementById("fiveDays").innerHTML = "";
    // Grab user input (the zip code)
    var $zipInput = document.getElementById("zipInput").value;
    if ($zipInput.length === 5){
      var url = 'http://api.wunderground.com/api/93c1cec992a886ae/conditions/forecast10day/q/' + $zipInput + '.json';
      getJSONP(url, 'weatherFunction');
    } else {
      alert("Zip Code must be 5 integer digits!");
    }
  });
});

// To Do Before Starting GeoLocation
  // Improve if / else statement (improve input error response)
  // Add city based on zip, populate the h2 with the info
  // Finish CSS



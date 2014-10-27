// JSONP function + callback

function getJSONP(url, cbName){
  var $script = document.createElement('script');
  $script.src = url + '?callback=' + cbName;
  document.body.appendChild($script);
}

function addItemToUl(item, currentCity){
  var day = item.date.weekday;
  var highTemp = item.high.fahrenheit;
  var lowTemp = item.low.fahrenheit;
  //var $img = 
  var $ulGrabber = document.querySelector('#fiveDays'); 
  var $li = document.createElement('li');
  $li.innerHTML =  day + "  " + "High - " + highTemp + " Low - " + lowTemp;
  $ulGrabber.appendChild($li);
  document.getElementById("city").innerHTML = currentCity;
}


function weatherFunction(data){ 
  if (data.response.error){
      alert("Please enter a valid Zip Code");
  } else {
    console.log(data);
    for (var i = 0; i < 5; i++){
      addItemToUl(data.forecast.simpleforecast.forecastday[i], data.current_observation.display_location.full); 
    }
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
  var url = 'http://api.wunderground.com/api/93c1cec992a886ae/conditions/forecast10day/q/' + $zipInput + '.json';
  getJSONP(url, 'weatherFunction');
  });

  document.getElementById("current_location").addEventListener("click", function(){
  
  
  });
});

// Start Geolocation
// Add images to output (add suns/rain and also Weather Underground logo)

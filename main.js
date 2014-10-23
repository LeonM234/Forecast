// JSONP function + callback
var url = 'http://api.wunderground.com/api/93c1cec992a886ae/forecast10day/q/TN/37217.json';

function getJSONP(url, cbName){
  var $script = document.createElement('script');
  $script.src = url + '?callback=' + cbName;
  document.body.appendChild($script);
}

function myAwesomeFunction(data){ 
  // Loop over JSON data
  for (var i = 0; i < 10; i++){
    var day = data.forecast.simpleforecast.forecastday[i].date.weekday;

    var highTemp = data.forecast.simpleforecast.forecastday[i].high.fahrenheit;

    var lowTemp = data.forecast.simpleforecast.forecastday[i].low.fahrenheit;
    
  function addItemToUl(data){
    var $ulGrabber = document.querySelector('#fiveDays');
    var $li = document.createElement('li');
    $li.innerHTML =  day + " " + "High: " + highTemp + ", Low: " + lowTemp;
    $ulGrabber.appendChild($li);
  }
    addItemToUl(); 
  }
}


document.addEventListener("DOMContentLoaded", function(){       
  getJSONP(url, 'myAwesomeFunction');
});



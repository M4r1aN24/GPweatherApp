$('#search-button').on('click', function displayTodaysWeather(event) {
  event.preventDefault();
  var city = $(".form-input").val();
  
    var queryURL =
      'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=e0304d8dfbbc9ab6fcf8b56eddb27564';
    fetch(queryURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var todaysWeather = $("#today");
        console.log(data);
      // The city name
      // The date
      // An icon representation of weather conditions
      // The temperature
      // The humidity
      // The wind speed
      // Storing the rating data
      var todaysDiv = $("<ul class = 'listBlock'>");
      
      var icon = $("<img>").attr('src', 'https://openweathermap.org/img/wn/'  + data.weather[0].icon + '@2x.png');

      var cityName = data.name;
      var liOne = $("<li>").text("Name: " + cityName + dayjs().format(" (DD/MM/YYYY)")) ;
      
      var todaysTemperature = data.main.temp -272.15;
      var liTwo = $("<li>").text("Temp: " + todaysTemperature.toFixed(2) + " Celcius");
      
      var todaysHumidity = data.main.humidity;
      var liThree = $("<li>").text("Humidity: " + todaysHumidity);
      
      var todaysWind = data.wind.speed;
      var liFour = $("<li>").text("Wind: " + todaysWind);

      todaysWeather.append(todaysDiv);
      liOne.append(icon);
      todaysDiv.append(liOne);
      todaysDiv.append(liTwo);
      todaysDiv.append(liThree);
      todaysDiv.append(liFour);
       
      });
  });


  $('#search-button').on('click', function displayForecast (event) {
    event.preventDefault();
    var forecast = $(".form-input").val();
    
      var queryURL =
        'https://api.openweathermap.org/data/2.5/forecast?q=' + forecast + '&appid=e0304d8dfbbc9ab6fcf8b56eddb27564';
      fetch(queryURL)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          var forecast = $("#forecast");
          console.log(data);
          var forecastDisplay = $('<h2>');
            forecastDisplay.text("5-Day Forecast: ");
            forecast.append(forecastDisplay);

          for(var i = 7; i <= data.list.length; i+=7){
           var eachDaysWeather = fiveDaysBlock(data.list[i]);
            forecast.append(eachDaysWeather);
          }
        });
        
    });
 
    function fiveDaysBlock(forecastData){
      console.log(forecastData.main.temp);

      var forecastList = $("<ul class = 'listBlock'>");

      var icon = $("<img id = 'weatherIcon'>").attr('src', 'https://openweathermap.org/img/wn/'  + forecastData.weather[0].icon + '@2x.png');

      var liOne = $("<li>").text(dayjs().format()) ;

      var forecastTemp = forecastData.main.temp - 272.15;
      var liTwo = $("<li>").text("Temperature: " + forecastTemp.toFixed(2) + " Celcius");

      var forecastHumidity = forecastData.main.humidity;
      var liThree = $("<li>").text("Humidity: " + forecastHumidity);
      
      var forecastWind = forecastData.wind.speed;
      var liFour = $("<li>").text("Wind speed: " + forecastWind + " miles per hour");
      
      liOne.append(icon);
      forecastList.append(liOne);
      forecastList.append(liTwo);
      forecastList.append(liThree);
      forecastList.append(liFour);

      return forecastList;
    }

  
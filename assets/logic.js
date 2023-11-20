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
        var todaysForecast = $("#today");
        console.log(data);
      // The city name
      // The date
      // An icon representation of weather conditions
      // The temperature
      // The humidity
      // The wind speed
      // Storing the rating data
      var todaysDiv = $("<div class = todaysDiv>");
      todaysForecast.append(todaysDiv);

      var cityName = data.name;
      var pOne = $("<p>").text("Name: " + cityName + dayjs().format(" (DD/MM/YYYY)")) ;
      todaysDiv.append(pOne);

    

      var todaysTemperature = data.main.temp -272.15;
      var pThree = $("<p>").text("Temperature: " + todaysTemperature.toFixed(2) + " Celcius");
      todaysDiv.append(pThree);

      var todaysHumidity = data.main.humidity;
      var pFour = $("<p>").text("Humidity: " + todaysHumidity);
      todaysDiv.append(pFour);

      var todaysWind = data.wind.speed;
      var pFive = $("<p>").text("Wind speed: " + todaysWind + " miles per hour");
      todaysDiv.append(pFive);

       
      });
  });
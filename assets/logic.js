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

      var todayDiv = $("<div class = 'todayBlock'>");
      var todayList = $("<ul class = 'todayListBlock'>");
      
      var icon = $("<img>").attr('src', 'https://openweathermap.org/img/wn/'  + data.weather[0].icon + '@2x.png');

      var cityName = data.name;
      var liOne = $("<li>").text("Name: " + cityName + dayjs().format(" (DD/MM/YYYY)")) ;
      
      var todaysTemperature = data.main.temp -272.15;
      var liTwo = $("<li>").text("Temp: " + todaysTemperature.toFixed(2) + "°C");
      
      var todaysHumidity = data.main.humidity;
      var liThree = $("<li>").text("Humidity: " + todaysHumidity + "%");
      
      var todaysWind = data.wind.speed;
      var liFour = $("<li>").text("Wind: " + todaysWind + " KPH");
      todaysWeather.append(todayDiv);
      todayDiv.append(todayList);
      liOne.append(icon);
      todayList.append(liOne);
      todayList.append(liTwo);
      todayList.append(liThree);
      todayList.append(liFour);
       
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

          for(var i = 0; i <= data.list.length; i++){
            if(data.list[i].dt_txt.slice(11, 13) === "12"){
           var eachDaysWeather = fiveDaysBlock(data.list[i]);
            forecast.append(eachDaysWeather);
            }
          }
        });
        
    });
 
    function fiveDaysBlock(forecastData){

      var forecastList = $("<ul class = 'listBlock'>");

      var icon = $("<img id = 'weatherIcon'>").attr('src', 'https://openweathermap.org/img/wn/'  + forecastData.weather[0].icon + '@2x.png');

      var liOne = $("<li>").text(dayjs(forecastData.dt_txt).format('DD/MM/YYYY')) ;

      var forecastTemp = forecastData.main.temp - 272.15;
      var liTwo = $("<li>").text("Temp: " + forecastTemp.toFixed(2) + "°C");

      var forecastHumidity = forecastData.main.humidity;
      var liThree = $("<li>").text("Humidity: " + forecastHumidity + "%");
      
      var forecastWind = forecastData.wind.speed;
      var liFour = $("<li>").text("Wind: " + forecastWind + " KPH");
      

      liOne.append(icon);
      forecastList.append(liOne);
      forecastList.append(liTwo);
      forecastList.append(liThree);
      forecastList.append(liFour);

      return forecastList;
    }

  
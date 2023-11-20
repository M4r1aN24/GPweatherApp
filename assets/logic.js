$('#search-button').on('click', function (event) {
  event.preventDefault()
  var city = $(".form-input").val();
    var queryURL =
      'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=e0304d8dfbbc9ab6fcf8b56eddb27564';
    fetch(queryURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
       console.log(data);
      });
  });
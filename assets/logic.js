var citySearch = '';

// Event listener for our weather search
$('#search-button').on('click', function (event) {
  event.preventDefault()
    // Storing our giphy API URL for a random cat image
    var queryURL =
      'https://api.openweathermap.org/data/2.5/weather?q=' + citySearch + '&appid=e0304d8dfbbc9ab6fcf8b56eddb27564';

    // Perfoming an Fetch GET request to our queryURL
    fetch(queryURL)
      .then(function (response) {
        // calling response.json() to extract json data from the response object
        return response.json();
      })
      // After the data from the Fetch request comes back
      .then(function (data) {
        console.log(queryURL);
       console.log(data);
      });
  });

// // displayMovieInfo function re-renders the HTML to display the appropriate content
// function displayMovieInfo() {
//   var city = $(this).attr("data-name");
  
//   // Creates a Fetch call for the specific movie button being clicked
//   fetch(queryURL)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       // YOUR CODE GOES HERE!!!
//       console.log(data)
//       $('#movies-view').empty()
//       var movieRating = $('<p>').text("Rating: " + data.Rated)
//       $('#movies-view').append(movieRating)
//       var movieReleaseDate = $('<p>').text("Release Date: " + data.Released)
//       $('#movies-view').append(movieReleaseDate)
//       var plot = $('<p>').text("Plot: " + data.Plot)
//       $('#movies-view').append(plot)
//       var moviePoster = $('<img>').attr('src', data.Poster)
//       $('#movies-view').append(moviePoster)
//     });
// }
// // Function for displaying movie data
// function renderButtons() {
//   // Deletes the movies prior to adding new movies
//   // (this is necessary otherwise you will have repeat buttons)
//   $("#buttons-view").empty();
//   // Loops through the array of movies
//   for (var i = 0; i < movies.length; i++) {
//     // Then dynamicaly generates buttons for each movie in the array
//     // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
//     var a = $("<button>");
//     // Adds a class of movie to our button
//     a.addClass("movie");
//     // Added a data-attribute
//     a.attr("data-name", movies[i]);
//     // Provided the initial button text
//     a.text(movies[i]);
//     // Added the button to the buttons-view div
//     $("#buttons-view").append(a);
//   }
// }
// // This function handles events where the add movie button is clicked
// $("#add-movie").on("click", function (event) {
//   event.preventDefault();
//   // This line of code will grab the input from the textbox
//   var movie = $("#movie-input").val().trim();
//   // The movie from the textbox is then added to our array
//   movies.push(movie);
//   // Calling renderButtons which handles the processing of our movie array
//   renderButtons();
// });
// // Adding click event listeners to all elements with a class of "movie"
// $(document).on("click", ".movie", displayMovieInfo);
// // Calling the renderButtons function to display the initial buttons
// renderButtons();
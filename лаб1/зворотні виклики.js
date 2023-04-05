function loadMovies(callback) {
  const request = new XMLHttpRequest();
  request.open('GET', 'https://ghibliapi.herokuapp.com/films');
  request.onload = function() {
    if (request.status === 200) {
      callback(null, JSON.parse(request.responseText));
    } else {
      callback('Error loading data', null);
    }
  };
  request.send();
}

loadMovies(function(error, movies) {
  if (error) {
    console.error(error);
  } else {
    console.log(movies);
  }
});
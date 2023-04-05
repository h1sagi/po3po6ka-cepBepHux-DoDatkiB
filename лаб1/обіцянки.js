function loadMovies() {
  function loadMovies() {
    return new Promise(function(resolve, reject) {
      const request = new XMLHttpRequest();
      request.open('GET', 'https://ghibliapi.herokuapp.com/films');
      request.onload = function() {
        if (request.status === 200) {
          resolve(JSON.parse(request.responseText));
        } else {
          reject('Error loading data');
        }
      };
      request.send();
    });
  }
  
  loadMovies()
    .then(function(movies) {
      console.log(movies);
    })
    .catch(function(error) {
      console.error(error);
    });
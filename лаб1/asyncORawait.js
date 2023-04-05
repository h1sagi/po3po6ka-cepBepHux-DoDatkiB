async function loadMovies() {
  const response = await fetch('https://ghibliapi.herokuapp.com/films');
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Error loading data');
  }
}

loadMovies()
  .then(function(movies) {
    console.log(movies);
  })
  .catch(function(error) {
    console.error(error);
  });
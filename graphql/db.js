let movies = [
  {id: 1, name: 'Spider man: No Way Home', score: 100},
  {id: 2, name: 'Dune', score: 0},
  {id: 3, name: 'Harry Potter', score: 74},
  {id: 4, name: 'Logan', score: 99},
  {id: 5, name: 'Avengers', score: 87},
];

export const getMovies = () => movies;

export const getById = id => {
  return movies.filter((person) => person.id === id)[0];
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);

  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
}

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    score,
  };

  movies.push(newMovie);

  return newMovie;
}

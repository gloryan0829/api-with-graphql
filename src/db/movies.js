let movies = [
    {
        id: 0,
        name: "Star Wars - The new one",
        score: 1
    },
    {
        id: 1,
        name: "Avengers - The new one",
        score: 8
    },
    {
        id: 2,
        name: "The Godfather I",
        score: 99
    },
    {
        id: 3,
        name: "Logan",
        score: 2
    }
];

export const getMovies = () => movies;
export const getMovieById = (id) => movies.filter(movie => movie.id === id)[0];
export const deleteMovieById = (id) => {
  const afterRemovedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length !== afterRemovedMovies.length) {
      movies = [...afterRemovedMovies];
      return true;
  } else {
      return false;
  }
};
export const addMovie = (name, score) => {
    const newMovie = {
        id : movies.length + 1,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
};

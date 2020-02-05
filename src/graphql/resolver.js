import { getUserById, getUsers } from "../db/users";
import {getMovies} from "../db/movies";

const resolvers = {
  Query: {
    users: () => getUsers(),
    user: (_, {id}) => getUserById(id),
    movies: (_, {limit, rating}) => getMovies(limit, rating),
    // movie: (_, {id}) => getMovieById(id)
  },
  // Mutation: {
  //   addMovie: (_, {name, score}) => addMovie(name, score),
  //   deleteMovie: (_, {id}) => deleteMovieById(id)
  // }
};

export default resolvers;

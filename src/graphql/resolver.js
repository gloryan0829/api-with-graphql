import { getUserById, getUsers } from "../db/users";
import {addMovie, deleteMovieById, getMovieById, getMovies} from "../db/movies";

const resolvers = {
  Query: {
    users: () => getUsers(),
    user: (_, {id}) => getUserById(id),
    movies: () => getMovies(),
    movie: (_, {id}) => getMovieById(id)
  },
  Mutation: {
    addMovie: (_, {name, score}) => addMovie(name, score),
    deleteMovie: (_, {id}) => deleteMovieById(id)
  }
};

export default resolvers;

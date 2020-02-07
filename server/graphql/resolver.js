import {addUser, deleteUser, getUserById, getUsers} from "../db/users";
import {getMovies} from "../db/movies";

const resolvers = {
  Query: {
    users: () => getUsers(),
    user: (_, {id}) => getUserById(id),
    movies: (_, {limit, rating}) => getMovies(limit, rating)
  },
  Mutation: {
    addUser: (_, {name, age, gender}) => addUser(name, age, gender),
    deleteUser: (_, {id}) => deleteUser(id)
  }
};

export default resolvers;

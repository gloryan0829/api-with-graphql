import axios from "axios";
import https from 'https';

const API_MOVIES = `https://yts.am/api/v2/list_movies.json?`;

export const getMovies = (limit, rating) => {
  let REQUEST_API = API_MOVIES;

  if (limit > 0) {
    REQUEST_API += `limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_API += `&minimum_rating=${rating}`;
  }

// At request level
  const agent = new https.Agent({
    rejectUnauthorized: false
  });

  return axios.get(REQUEST_API, { httpsAgent: agent }).then(({data}) => {
    return data.data.movies
  }).catch(err => err)
};

import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Movie from "./Movie";
import "../styles/App.css";

const GET_MOVIES = gql`
  {
    movies {
      id
      year
      title
      rating
      genres
      summary
      medium_cover_image
    }
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(GET_MOVIES);
  useEffect(() => {
    console.log(data);
  }, []);
  console.log(error);
  return (
    <div className="container">
      {loading
          ? <div className="loader"><span className="loader_text">Loading...</span></div>
          : (
              <div className="movies">
                {
                  data && data.movies.map(movie => {
                    movie["poster"] = movie["medium_cover_image"];
                    return <Movie key={movie.id} {...movie} />;
                  })
                }
              </div>
          )
      }
    </div>
  );
};

export default Home;

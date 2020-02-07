import React from "react";
import PropTypes from "prop-types";
import "../styles/Movie.css";
import {Link} from "react-router-dom";

const Movie = ({ id, year, title, genres, summary, poster }) => {
  return (
    <Link
      to={{
        pathname: "/movie-detail",
        state: {
          year,
          title,
          genres,
          summary,
          poster
        }
      }}
    >
      <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">
            {id} 영화제목 : {title}
          </h3>
          <h3 className="movie__year">{year}</h3>
          <ul>
            {genres.map((genre, index) => {
              return (
                <li key={index} className="genres__genre">
                  {genre}
                </li>
              );
            })}
          </ul>
          <h3 className="summary">{summary.slice(0, 190)}</h3>
        </div>
      </div>
    </Link>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default Movie;

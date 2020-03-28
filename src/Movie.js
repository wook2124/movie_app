import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, title, rating, runtime, genres, summary, poster }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie_data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__rating">
          ★{rating} / Runtime: {runtime}
        </h5>
        <ul className="movie__genres">
          {genres.map((genre, number) => (
            <li key={number} className="genres_genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default Movie;

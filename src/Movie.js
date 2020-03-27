import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, title, rating, runtime, genres, summary, poster }) {
  return (
    <div class="movie">
      <img src={poster} alt={title} title={title} />
      <div class="movie_data">
        <h3 class="movie__title">{title}</h3>
        <h5 class="movie__rating runtime genres">
          ★{rating} / Time: {runtime} / Genres: {genres}
        </h5>
        <p class="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.array.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default Movie;

import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, title, rating, runtime, genres, summary, poster }) {
  return (
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: {
          title,
          rating,
          runtime,
          genres,
          summary,
          poster
        }
      }}
    >
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
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      </div>
    </Link>
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

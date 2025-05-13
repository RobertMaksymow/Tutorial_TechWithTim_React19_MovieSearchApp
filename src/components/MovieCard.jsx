import React from "react";

const MovieCard = ({ movie }) => {
  const handleClick = () => {
    console.log("Movie clicked:", movie);
    // Add your logic to handle the click event here
  };
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={handleClick}>
            ♡
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;

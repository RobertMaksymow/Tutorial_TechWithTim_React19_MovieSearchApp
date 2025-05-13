import React from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const movies = [
    {
      id: 1,
      title: "Movie 1",
      release_date: "2023-01-01",
      url: "https://example.com/movie1.jpg",
    },
    {
      id: 2,
      title: "Movie 2",
      release_date: "2023-02-01",
      url: "https://example.com/movie2.jpg",
    },
    {
      id: 3,
      title: "Movie 3",
      release_date: "2023-03-01",
      url: "https://example.com/movie3.jpg",
    },
  ];

  const handleSearch = (event) => {};

  return (
    <div className="home">
      <form onSubmit={handleSearch} action="" className="search-form">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import "../css/Home.css";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    {
      id: 1,
      title: "John 1",
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

  const handleSearch = (event) => {
    alert(`Searching for: ${searchQuery}`);

    event.preventDefault(); // Prevents reloading the page after hitting submit
    setSearchQuery(""); // Clear the search input after submission
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} action="" className="search-form">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().includes(searchQuery.toLowerCase()) && (
              // movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard key={movie.id} movie={movie} />
            )
        )}
      </div>
    </div>
  );
};

export default Home;

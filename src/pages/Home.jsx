import React, { useState, useEffect } from "react";
import "../css/Home.css";
import { getPopularMovies, searchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const apiKey = import.meta.env.VITE_API_KEY;
  // const apiUrl = import.meta.env.VITE_API_URL;

  // console.log(apiUrl, apiKey);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.error("Failed to load popular movies:", error);
        setError("Failed to load popular movies");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault(); // Prevents reloading the page after hitting submit
    if (!searchQuery.trim()) {
      setError("Please enter a search query");
      return;
    }
    if (loading) return; // Prevents multiple submissions while loading

    setLoading(true);

    try {
      const searchResults = await searchMovies(searchQuery);
      if (searchResults.length === 0) {
        setError("No movies found");
      } else {
        setMovies(searchResults);
        setError(null); // Clear any previous error
      }
    } catch (error) {
      console.error("Error searching movies:", error);
      setError("Failed to search movies");
    } finally {
      setLoading(false);
    }

    // setSearchQuery(""); // Clear the search input after submission
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

      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map(
            (movie) => (
              // NOTE: this starts filtering the movies (either by startsWith or includes) from the currently displayed movies, useful, but not in this case
              // movie.title.toLowerCase().includes(searchQuery.toLowerCase()) && (
              // movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard key={movie.id} movie={movie} />
            )
            // )
          )}
        </div>
      )}

      {/* Display the movies */}
    </div>
  );
};

export default Home;

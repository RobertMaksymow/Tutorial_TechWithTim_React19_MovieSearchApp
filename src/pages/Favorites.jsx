import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

const Favorites = () => {
  const { favorites } = useMovieContext();
  console.log("Favorites:", favorites);

  if (favorites.length > 0) {
    return (
      <div className="favorites">
        <h2>My Favorite Movies</h2>
        <div className="movies-grid">
          {favorites.map(
            (movie) => (
              <MovieCard key={movie.id} movie={movie} />
            )
            // )
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet...</h2>
      <p>Add some movies to your list</p>
    </div>
  );
};

export default Favorites;

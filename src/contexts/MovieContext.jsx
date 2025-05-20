import { createContext, useContext, useState, useEffect, use } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  //   useEffect(() => {
  //     const storedFavorites = JSON.parse(localStorage.getItem("favorites"));

  //     if (storedFavorites) {
  //       setFavorites(storedFavorites);
  //     }
  //   }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie) => {
    // In REACT we can't use push to add an element to an array, we need to use the spread operator
    // and setFavorites to update it. We take previous state and add the new movie to it.
    // That's how you can update the state when dealing with arrays in React.
    setFavorites((previous) => [...previous, movie]);
  };

  const removeFromFavorites = (movieId) => {
    setFavorites((previous) =>
      previous.filter((movie) => movie.id !== movieId)
    );
  };

  const isFavorite = (movieId) => {
    // .some() Determines whether the specified callback function returns true for any element of an array.
    return favorites.some((movie) => movie.id === movieId);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

import React from "react";
import { useState, useEffect } from "react";
import MovieController from "../controllers/MovieController";
import MovieItem from "./MovieItem";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await MovieController.getMovies();
        setMovies(movies.slice(0, 18));
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <div className="flex-row mt-5">
      <h1 className="mb-5 text-3xl font-bold">New Realease</h1>
      <div className="flex flex-wrap justify-evenly gap-7 ">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;

import React from "react";

const MovieItem = ({ movie }) => {
  return (
    <div className="relative w-36 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-200 cursor-pointer">
      <img
        className="rounded-2xl  shadow-[34px_37px_34px_-33px_rgba(0,_0,_0,_0.8)]"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />

      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
        }}
      ></div>

      <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
        <h3 className="text-md">{movie.title}</h3>
      </div>
    </div>
  );
};

export default MovieItem;

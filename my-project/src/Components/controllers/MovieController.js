import axios from "axios";
import MovieModel from "../models/MovieModel";

class MovieController {
  static async getMovies() {
    try {
        const response = await axios.get(
            "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=43ed6699a5ac6e0c0cc581c5445368cf"
        );
      return response.data.results.map(
        (movie) =>
          new MovieModel(
            movie.id,
            movie.title,
            movie.poster_path,
            movie.vote_average,
            movie.vote_count
          )
      );
    } catch (error) {
      console.log("Error", error);
    }
  }
}

export default MovieController
class MovieModel {
    constructor(id, title, poster_path, vote_average, vote_count) {
        this.id = id;
        this.title = title;
        this.poster_path = poster_path;
        this.vote_average = vote_average;
        this.vote_count = vote_count;
    }
}

export default MovieModel
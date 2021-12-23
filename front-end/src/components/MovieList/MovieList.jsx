import React from "react";
import MovieItem from "../MovieItem/MovieItem";

const MovieList = ({ movieList }) => {
  console.log("haha", movieList);

  const base_url = "https://image.tmdb.org/t/p/w342";
  const not_available_poster =
    "https://dummyimage.com/342x500/7b8a91/ffffff&text=Poster+Not+Available";
  const movie_list =
    movieList &&
    movieList.map((movie, idx) => (
      <MovieItem
        key={idx}
        id={movie.id}
        releaseDate={movie.release_date && movie.release_date.slice(0, 4)}
        title={movie.title}
        voteAvg={movie.vote_average}
        mediaType={movie.media_type}
        poster={
          movie.poster_path === null
            ? not_available_poster
            : base_url + movie.poster_path
        }
      />
    ));
  return <>{movie_list}</>;
};

export default MovieList;

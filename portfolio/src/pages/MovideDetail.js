import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
// import movies
import { MovieState } from "../movieState";

const MovieDetail = () => {
  const location = useLocation();
  const url = location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const currentMovie = movies.filter((movie) => movie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);
  return (
    <Details>
      <div className="headline">
        <h2>{movie.title}</h2>
        <img src={movie.mainImg} alt="movie" />
      </div>
    </Details>
  );
};

const Details = styled.div`
  .headLine {
  }
`;

export default MovieDetail;

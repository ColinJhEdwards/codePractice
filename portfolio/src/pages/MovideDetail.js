import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
// import movies
import { MovieState } from "../movieState";
import { pageAnimation } from "../animations";
import { motion } from "framer-motion";

const MovieDetail = () => {
  const location = useLocation();
  const url = location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState({ awards: [] });

  useEffect(() => {
    const currentMovie = movies.filter((movie) => movie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);
  return (
    <Details variants={pageAnimation} initial="hidden" animate="show">
      <div className="headline">
        <h2>{movie.title}</h2>
        <img src={movie.mainImg} alt="movie" />
      </div>
      <div className="awards">
        {movie.awards.map((award) => (
          <div className="text" key={award.title}>
            <h3>{award.title}</h3>
            <div className="line"></div>
            <p>{award.description}</p>
          </div>
        ))}
      </div>
      <div className="imageDisplay">
        <img src={movie.secondaryImg} alt="movie image" />
      </div>
    </Details>
  );
};

const Details = styled(motion.div)`
  color: white;
  .headline {
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2 {
      position: absolute;
      top: 10%;
      left: 50%;
      transform: translate(-10%, -50%);
    }
    img {
      width: 100%;
      height: 70vh;
      object-fit: cover;
    }
  }
  .awards {
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
    .text {
      padding: 5rem;
      h3 {
        font-size: 2rem;
      }
      .line {
        width: 100%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem;
      }
      p {
        padding: 2rem 0rem;
      }
    }
  }
  .imageDisplay {
    min-height: 50vh;
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
  }
`;

export default MovieDetail;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import { pageAnimation, fade, photoAnim, lineAnim } from "../animations";
import { motion } from "framer-motion";

const OurWork = () => {
  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <div className="movie">
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div className="line" variants={lineAnim}></motion.div>
        <div className="hide">
          <Link to="/work/the-athlete">
            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          </Link>
        </div>
      </div>
      <div className="movie">
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="theracer" />
        </Link>
      </div>
      <div className="movie">
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </div>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
    color: white;
  }
  .movie {
    padding-bottom: 10rem;
    .line {
      height: 0.5rem;
      background: #cccccc;
      margin-bottom: 3rem;
    }
    img {
      width: 100%;
      height: 70vh;
      object-fit: cover;
    }
    .hide {
      overflow: hidden;
    }
  }
`;

export default OurWork;

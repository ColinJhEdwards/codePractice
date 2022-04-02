import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";
import { motion } from "framer-motion";
import { titleAnim, fade } from "../animations";
import WAve from "./WAve";

const AboutSection = () => {
  return (
    <StyledDiv className="about">
      <div className="description">
        <motion.div className="title">
          <div className="hide">
            <motion.h2 variants={titleAnim}>We work to make </motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span>
            </motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnim}>come true</motion.h2>
          </div>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videograpghy ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </div>
      <div className="image">
        <img src={home1} alt="Guy with a camera :)" />
      </div>
      <WAve />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  .description {
    z-index: 2;
    flex: 1;
    padding-right: 5rem;
    h2 {
      font-weight: lighter;
    }
  }
  .hide {
    overflow: hidden;
  }
  .image {
    z-index: 2;
    flex: 1;
    overflow: hidden;
    img {
      width: 100%;
      height: 80vh;
      object-fit: cover;
    }
  }
`;

export default AboutSection;

import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";
import { motion } from "framer-motion";

const AboutSection = () => {
  const titleAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
  };
  const container = {
    hidden: { x: 100 },
    visible: {
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.5,
      },
    },
  };
  return (
    <StyledDiv className="about">
      <div className="description">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="title"
        >
          <div className="hide">
            <motion.h2 variants={titleAnimation}>We work to make </motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span>
            </motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnimation}>come true</motion.h2>
          </div>
        </motion.div>
        <p>
          Contact us for any photography or videograpghy ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={home1} alt="Guy with a camera :)" />
      </div>
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

import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import styled from "styled-components";
import UseScroll from "./UseScroll";
import { fade } from "../animations";

const ServicesSection = () => {
  const [element, controls] = UseScroll();
  return (
    <StyledServices
      variant={fade}
      ref={element}
      animate={controls}
      initial="hidden"
      className="services"
    >
      <div className="description">
        <h2>
          High <span>quality</span> services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Proffesional</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="team" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="home2" />
      </div>
    </StyledServices>
  );
};

const StyledServices = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  .description {
    flex: 1;
    padding-right: 5rem;
    .cards {
      display: flex;
      flex-wrap: wrap;
      .card {
        flex-basis: 20rem;
        .icon {
          display: flex;
          align-items: center;
          h3 {
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
          }
        }
      }
    }
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

export default ServicesSection;

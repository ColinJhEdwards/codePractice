import React from "react";
import { StyledDiv } from "../styles";
import styled from "styled-components";
import Toggle from "./Toggle";
import { LayoutGroup } from "framer-motion";

const FaqSection = () => {
  return (
    <StyledFaq className="faq">
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>
      <LayoutGroup>
        <Toggle title="How Do I Start? +">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                non.
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule +">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                non.
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods +">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                non.
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="What Products do you offer? +">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                non.
              </p>
            </div>
          </div>
        </Toggle>
      </LayoutGroup>
    </StyledFaq>
  );
};

const StyledFaq = styled(StyledDiv)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;

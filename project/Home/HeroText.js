import React from "react";
import styled from "styled-components";

const HeroText = () => {
  return (
    <Container>
      <h1>Leonardo Tafarello</h1>
      <BtnContainer href='/SimpleResume'>
        <button className="readmore" href='/SimpleResume' target="_blank"> Read More</button>
      </BtnContainer>
    </Container>
  );
};

const BtnContainer = styled.a`
  margin-top: 2rem;
  button {
    background: #81d1ff;
    border: none;
    padding: 0.9rem 1.1rem;
    color: #fff;
    border-radius: 1rem;
    box-shadow: 0px 13px 24px -7px #81d1ff;
    transition: all 0.3s ease-in-out;
    margin: 0.5rem;
    font-size: 1.1rem;
    cursor: pointer;

  }
  .readmore{
    color: #fcf300;
    font-weight:bold;
    background: transparent;
    border: 3px solid #81d1ff;
    &:hover {
      box-shadow: 0px 17px 16px -11px #81d1ff;
      transform: translateY(-5px);
    }

  }
`;

const Container = styled.div`
  padding: 1rem;
  h1 {
    font-size: 3.5rem;
    font-weight: 900;
    &:nth-of-type(1) {
      color: #fcf300;
      font-weight: 700;
    }
  }
`;

export default HeroText;
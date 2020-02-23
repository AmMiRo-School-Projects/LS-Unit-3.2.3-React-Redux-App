import React from "react";
import { NavLink } from "react-router-dom";
import cardBack from "../assets/card-back.png";
import { connect } from "react-redux";
import { getData } from "../actions/actions";
import styled from "styled-components";

const CardImg = styled.img`
  max-width: 200px;
  height: 278px;
  border-radius: 5px;
  margin: 1.5%;
`;

const StartDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 10% auto;
`;

const Start = props => {
  return (
    <StartDiv>
      <NavLink to="/game">
        <button onClick={props.getData}>Shuffle and Begin</button>
      </NavLink>
      <CardImg src={cardBack} alt="Deck of Cards" />
    </StartDiv>
  );
};

export default connect(null, { getData })(Start);

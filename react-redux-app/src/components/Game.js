import React from "react";
import { NavLink } from "react-router-dom";
import Draw from "./Draw";
import Hand from "./Hand";
import Discard from "./Discard";
import { connect } from "react-redux";
import { resetGame } from "../actions/actions";
import styled from "styled-components";

const GameDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 3% auto;
`;

const PilesDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const Game = props => {
  return (
    <GameDiv>
      {props.isShufflingCards ? (
        <h2>Shuffling deck ...</h2>
      ) : props.error ? (
        <h2>Some sort of error occured. Try resetting the game.</h2>
      ) : (
        <PilesDiv>
          <Draw />
          <Hand />
          <Discard />
        </PilesDiv>
      )}
      <NavLink to="/">
        <button onClick={props.resetGame}>Reset Game</button>
      </NavLink>
    </GameDiv>
  );
};

const mapStateToProps = state => {
  return {
    isShufflingCards: state.call.isShufflingCards,
    error: state.call.error
  };
};

export default connect(mapStateToProps, { resetGame })(Game);

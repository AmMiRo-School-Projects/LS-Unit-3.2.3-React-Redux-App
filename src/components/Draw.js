import React from "react";
import cardBack from "../assets/card-back.png";
import { connect } from "react-redux";
import { drawCard } from "../actions/actions";
import styled from "styled-components";

const DrawDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 200px;
`;

const CardImg = styled.img`
  max-width: 200px;
  height: 278px;
  border-radius: 10px;
  margin: 1%;
`;

const Draw = props => {
  return (
    <DrawDiv>
      <h2>Draw Pile</h2>
      {props.pile.length >= 10 ? (
        <p>Max hand size is 10.</p>
      ) : props.number === 0 ? (
        <div />
      ) : (
        <button onClick={() => props.drawCard(props.call)}>Draw</button>
      )}
      {props.number === 0 ? (
        <p>You are out of cards.</p>
      ) : (
        <CardImg src={cardBack} alt="Card Back" />
      )}
    </DrawDiv>
  );
};

const mapStateToProps = state => {
  return {
    call: state.draw.call,
    number: state.draw.number,
    pile: state.hand.pile
  };
};

export default connect(mapStateToProps, { drawCard })(Draw);

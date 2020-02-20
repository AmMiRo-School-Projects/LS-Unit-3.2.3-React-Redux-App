import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { discardCard } from "../actions/actions";
import styled from "styled-components";

const HandDiv = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const PileDiv = styled.div`
width: 1000px;
flex-direction: row;
display:flex;
flex-wrap: wrap;
justify-content: space-around
align-items: center;
`;

const Hand = props => {
  return (
    <HandDiv>
      <h2>Your Hand</h2>
      <PileDiv>
        {props.pile.map(card => {
          return <Card card={card} discardCard={props.discardCard} />;
        })}
      </PileDiv>
    </HandDiv>
  );
};

const mapStateToProps = state => {
  return {
    pile: state.hand.pile
  };
};

export default connect(mapStateToProps, { discardCard })(Hand);

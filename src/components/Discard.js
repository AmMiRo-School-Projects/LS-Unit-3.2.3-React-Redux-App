import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const DiscardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 200px;
`;

const CardImg = styled.img`
  max-width: 200px;
  border-radius: 5px;
`;

const Discard = props => {
  return (
    <DiscardDiv>
      <h2>Discard Pile</h2>
      {props.pile.length ? (
        <CardImg src={`${props.pile[0].image}`} alt="Card Image" />
      ) : (
        <p>No discarded cards</p>
      )}
    </DiscardDiv>
  );
};

const mapStateToProps = state => {
  return {
    pile: state.discard.pile
  };
};

export default connect(mapStateToProps, {})(Discard);

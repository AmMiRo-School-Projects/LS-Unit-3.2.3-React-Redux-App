import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardImg = styled.img`
  max-width: 200px;
  border-radius: 5px;
  margin: 1%;
`;

const Card = props => {
  return (
    <CardDiv>
      <CardImg src={`${props.card.image}`} alt="Card Image" />
      <button onClick={() => props.discardCard(props.card)}>Discard</button>
    </CardDiv>
  );
};

export default Card;

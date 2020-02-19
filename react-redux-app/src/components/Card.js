import React from "react";

const Card = props => {
  return (
    <div>
      <img src={`${props.card.image}`} alt="Card Image" />
      <button>Discard</button>
    </div>
  );
};

export default Card;

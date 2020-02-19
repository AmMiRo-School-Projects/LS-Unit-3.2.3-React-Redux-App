import React from "react";
import cardBack from "../assets/card-back.png";
import { connect } from "react-redux";

const Draw = () => {
  return (
    <div>
      <h2>Draw Pile</h2>
      <button>Draw</button>
      <img src={cardBack} alt="Card Back" />
    </div>
  );
};

export default connect(null, {})(Draw);

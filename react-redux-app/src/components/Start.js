import React from "react";
import { NavLink } from "react-router-dom";
import cardBack from "../assets/card-back.png";
import { connect } from "react-redux";

const Start = props => {
  return (
    <div>
      <NavLink to="/game">
        <button>Shuffle and Begin</button>
      </NavLink>
      <img src={cardBack} alt="Deck of Cards" />
    </div>
  );
};

export default connect(null, {})(Start);

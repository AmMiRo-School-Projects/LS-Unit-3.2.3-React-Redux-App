import React from "react";
import { NavLink } from "react-router-dom";
import Draw from "./Draw";
import Hand from "./Hand";
import Discard from "./Discard";

const Game = () => {
  return (
    <div>
      <div>
        <Draw />
        <Hand />
        <Discard />
      </div>
      <NavLink to="/">
        <button>Reset Game</button>
      </NavLink>
    </div>
  );
};

export default Game;

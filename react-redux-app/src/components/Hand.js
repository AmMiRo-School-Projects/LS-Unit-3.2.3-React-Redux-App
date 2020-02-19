import React from "react";
import { connect } from "react-redux";
import Card from "./Card";

const Hand = props => {
  return (
    <div>
      <h2>Your Hand</h2>
      <div>
        {props.pile.map(card => {
          return <Card card={card} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    pile: state.hand.pile
  };
};

export default connect(mapStateToProps, {})(Hand);

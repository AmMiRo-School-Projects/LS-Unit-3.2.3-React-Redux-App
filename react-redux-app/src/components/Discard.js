import React from "react";
import { connect } from "react-redux";

const Discard = props => {
  return (
    <div>
      <h2>Discard Pile</h2>
      {props.pile.length ? (
        <img src={`${props.pile[0].image}`} alt="Card Image" />
      ) : (
        <p>No discarded cards</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    pile: state.discard.pile
  };
};

export default connect(mapStateToProps, {})(Discard);

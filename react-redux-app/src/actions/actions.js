import axios from "axios";

export const SHUFFLING_DECK = "SHUFFLING_DECK";
export const SET_DRAW = "SET_DRAW";
export const SHUFFLE_ERROR = "SHUFFLE_ERROR";
export const getData = () => dispatch => {
  dispatch({ type: SHUFFLING_DECK });
  axios
    .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(res => {
      console.log("Response", res);
      dispatch({ type: SET_DRAW, payload: res });
    })
    .catch(err => {
      console.log("Error", err);
      dispatch({ type: SHUFFLE_ERROR });
    });
};
export const drawCard = card => {
  return { type: "DRAW_CARD", payload: card };
};

export const discardCard = card => {
  return { type: "DISCARD_CARD", payload: card };
};

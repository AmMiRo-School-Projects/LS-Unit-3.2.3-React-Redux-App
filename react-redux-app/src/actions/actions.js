import axios from "axios";

export const SHUFFLING_DECK = "SHUFFLING_DECK";
export const SET_DRAW = "SET_DRAW";
export const SHUFFLE_ERROR = "SHUFFLE_ERROR";
export const getData = () => dispatch => {
  dispatch({ type: SHUFFLING_DECK });
  axios
    .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(res => {
      console.log("Shuffle Response", res);
      dispatch({ type: SET_DRAW, payload: res.data });
    })
    .catch(err => {
      console.log("Shuffle Error", err);
      dispatch({ type: SHUFFLE_ERROR });
    });
};
export const DRAWING_CARD = "DRAWING_CARD";
export const CARD_DRAWN = "CARD_DRAWN";
export const DRAW_ERROR = "DRAW_ERROR";
export const drawCard = item => dispatch => {
  dispatch({ type: DRAWING_CARD });
  axios
    .get(item)
    .then(res => {
      console.log("Draw Response", res);
      dispatch({ type: CARD_DRAWN, payload: res.data });
    })
    .catch(err => {
      console.log("Draw Error", err);
      dispatch({ type: DRAW_ERROR });
    });
};

export const discardCard = card => {
  return { type: "DISCARD_CARD", payload: card };
};

export const resetGame = () => {
  return { type: "RESET_GAME" };
};

import {
  SHUFFLING_DECK,
  SET_DRAW,
  SHUFFLE_ERROR,
  DRAWING_CARD,
  CARD_DRAWN,
  DRAW_ERROR
} from "../actions/actions";

const initialState = {
  call: {
    isShufflingCards: false,
    isDrawingCard: false,
    error: false
  },
  draw: {
    id: 0,
    number: 1,
    call: ""
  },
  discard: {
    pile: []
  },
  hand: {
    pile: []
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHUFFLING_DECK:
      return {
        ...state,
        call: { ...state.call, isShufflingCards: true }
      };
    case SET_DRAW:
      return {
        ...state,
        call: { ...state.call, isShufflingCards: false },
        draw: {
          ...state.draw,
          id: action.payload.deck_id,
          number: action.payload.remaining,
          call: `https://deckofcardsapi.com/api/deck/${action.payload.deck_id}/draw/?count=1`
        }
      };
    case SHUFFLE_ERROR:
      return {
        ...state,
        call: { ...state.call, isShufflingCards: false, error: true }
      };
    case DRAWING_CARD:
      return {
        ...state,
        call: { ...state.call, isDrawingCard: true }
      };
    case CARD_DRAWN:
      return {
        ...state,
        call: { ...state.call, isDrawingCard: false },
        draw: { ...state.draw, number: action.payload.remaining },
        hand: {
          ...state.hand,
          pile: [action.payload.cards[0], ...state.hand.pile]
        }
      };
    case DRAW_ERROR:
      return {
        ...state,
        call: { ...state.call, isDrawingCard: false, error: true }
      };
    case "DISCARD_CARD":
      return {
        ...state,
        hand: {
          ...state.hand,
          pile: state.hand.pile.filter(
            card => card.code !== action.payload.code
          )
        },
        discard: {
          ...state.discard,
          pile: [action.payload, ...state.discard.pile]
        }
      };
    case "RESET_GAME":
      return {
        ...state,
        hand: { ...state.hand, pile: [] },
        discard: { ...state.discard, pile: [] },
        call: { ...state.call, error: false }
      };
    default:
      return state;
  }
};

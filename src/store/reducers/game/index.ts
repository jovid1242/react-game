import { GameAction, GameActions, GameState } from "./types";

const initialState: GameState = {
  position: 1
};

export default function authReduser(
  state = initialState,
  action: GameAction
): GameState {
  switch (action.type) {
    case GameActions.SET_POSITION:
      return { ...state, position: action.payload };
    default:
      return state;
  }
}
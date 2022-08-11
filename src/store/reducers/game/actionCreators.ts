import { AppDispatch } from "store";
import { GameActions, SetPositionAction } from "./types";

export const AuthActionCreators = {
  setPosition: (position: number): SetPositionAction => ({
    type: GameActions.SET_POSITION,
    payload: position
  }),
};
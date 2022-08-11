export interface GameState {
  position: number;
}

export enum GameActions {
  SET_POSITION = "SET_POSITION"
}

export interface SetPositionAction {
  type: GameActions.SET_POSITION;
  payload: number;
}
export type GameAction = SetPositionAction;
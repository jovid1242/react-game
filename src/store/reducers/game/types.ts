export interface GameState {
    position: number
    startPosition: number
    gameOn: boolean
    steps: { [key: number]: Array<number> }
}

export enum GameActions {
    SET_POSITION = "SET_POSITION",
    SET_START_POSITION = "SET_START_POSITION",
    GAME_ON = "GAME_ON",
}

export interface SetPositionAction {
    type: GameActions.SET_POSITION
    payload: number
}

export interface SetStartPosition {
    type: GameActions.SET_START_POSITION
    payload: number
}

export interface GameOn {
    type: GameActions.GAME_ON
    payload: boolean
}

export type GameAction = SetPositionAction | SetStartPosition | GameOn

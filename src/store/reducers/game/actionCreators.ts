import { AppDispatch } from "store"

// types
import {
    GameActions,
    SetPositionAction,
    SetStartPosition,
    GameOn,
} from "./types"

export const GameActionCreators = {
    setPosition: (position: number): SetPositionAction => ({
        type: GameActions.SET_POSITION,
        payload: position,
    }),

    setStartPosition: (position: number): SetStartPosition => ({
        type: GameActions.SET_START_POSITION,
        payload: position,
    }),

    setGameOn: (endGame: boolean): GameOn => ({
        type: GameActions.GAME_ON,
        payload: endGame,
    }),
}

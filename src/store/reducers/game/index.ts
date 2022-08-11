import { GameAction, GameActions, GameState } from "./types"

const right = 1
const left = -1
const top = -3
const bottom = 3

const initialState: GameState = {
    position: 1,
    startPosition: 1,
    gameOn: false,
    steps: {
        1: [right, bottom],
        2: [left, right, bottom],
        3: [left, bottom],
        4: [top, right, bottom],
        5: [left, top, right, bottom],
        6: [left, top, bottom],
        7: [top, right],
        8: [left, top, right],
        9: [left, top],
    },
}

export default function gameReduser(
    state = initialState,
    action: GameAction
): GameState {
    switch (action.type) {
        case GameActions.SET_POSITION:
            return { ...state, position: action.payload }
        case GameActions.SET_START_POSITION:
            return { ...state, startPosition: action.payload }
        case GameActions.GAME_ON:
            return { ...state, gameOn: action.payload }
        default:
            return state
    }
}

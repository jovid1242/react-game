import {combineReducers, createStore } from "redux";
import redusers from "./reducers";

const rootReduser = combineReducers(redusers);

export const store = createStore(rootReduser);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
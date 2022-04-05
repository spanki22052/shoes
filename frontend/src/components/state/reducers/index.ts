import { combineReducers } from "redux";
import cartReducer from "./cart-reducer";

const reducers = combineReducers({
  cart: cartReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;

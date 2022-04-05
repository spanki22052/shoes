import cartAction from "state/actions/cart-action";
import { ActionType } from "../action-types";

const initialState = 0;

const cartReducer = (state: number = initialState, action: cartAction) => {
  switch (action.type) {
    case ActionType.INCREASE:
      return state + action.payload;
    case ActionType.DECREASE:
      return state - action.payload;
    case ActionType.RESET:
      return 0;
    default:
      return state;
  }
};

export default cartReducer;

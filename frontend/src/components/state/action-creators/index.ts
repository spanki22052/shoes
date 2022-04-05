import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import cartAction from "state/actions/cart-action";

export const increaseCart = (amount: number) => {
  return (dispatch: Dispatch<cartAction>) => {
    dispatch({
      type: ActionType.INCREASE,
      payload: amount,
    });
  };
};

export const decreaseCart = (amount: number) => {
  return (dispatch: Dispatch<cartAction>) => {
    dispatch({
      type: ActionType.DECREASE,
      payload: amount,
    });
  };
};

export const resetCart = () => {
  return (dispatch: Dispatch<cartAction>) => {
    dispatch({
      type: ActionType.RESET,
    });
  };
};

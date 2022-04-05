interface increaseCartAction {
  type: "increase";
  payload: number;
}

interface decreaseCartAction {
  type: "decrease";
  payload: number;
}

interface resetCartAction {
  type: "reset";
}

type cartAction = increaseCartAction | decreaseCartAction | resetCartAction;
export default cartAction;

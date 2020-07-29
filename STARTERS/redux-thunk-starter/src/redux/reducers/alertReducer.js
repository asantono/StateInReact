import { SET_ALERT } from "../types";

const INITIAL_STATE = {
  alert: "",
};

const alertReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return {
        ...state,
        alert: payload,
      };

    default:
      return state;
  }
};

export default alertReducer;

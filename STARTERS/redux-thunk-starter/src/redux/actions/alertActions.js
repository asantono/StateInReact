import { SET_ALERT } from "../types";

export const setAlertAction = (str) => {
  return { type: SET_ALERT, payload: str };
};

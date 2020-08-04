import { FIND_EMPLOYEE, FIND_CUSTOMER } from "../types";

const INITIAL_STATE = {
  employee: { name: { first: "" } },
  customer: { name: { first: "" } },
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case FIND_EMPLOYEE:
      return {
        ...state,
        employee: payload,
      };
    case FIND_CUSTOMER:
      return {
        ...state,
        customer: payload,
      };
    default:
      return state;
  }
};

export default userReducer;

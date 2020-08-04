import { FIND_EMPLOYEE, FIND_CUSTOMER } from "../types";

export const findEmployee = () => async (dispatch) => {
  const url = "https://randomuser.me/api/";
  const setHeaders = { headers: { "Content-Type": "application/json" } };
  let res = await fetch(url, { setHeaders });
  res = await res.json();
  console.log(res);
  let employee = res.results[0];
  dispatch({ type: FIND_EMPLOYEE, payload: employee });
};

export const findCustomer = () => async (dispatch) => {
  const url = "https://randomuser.me/api/";
  const setHeaders = { headers: { "Content-Type": "application/json" } };
  let res = await fetch(url, { setHeaders });
  res = await res.json();
  console.log(res);
  let customer = res.results[0];
  dispatch({ type: FIND_CUSTOMER, payload: customer });
};

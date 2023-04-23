import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../constants/actionTypes";
import usersData from "../mocks/Users.json";

export const login = (email, password) => {
  return (dispatch) => {
    const user = usersData.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: user,
      });
    } else {
      dispatch({
        type: LOGIN_FAILURE,
        payload: "Invalid email or password",
      });
    }
  };
};

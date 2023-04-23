import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../constants/actionTypes";

const mockUsers = [
  {
    email: "test1@example.com",
    password: "password123",
    name: "Test User 1",
  },
  {
    email: "test2@example.com",
    password: "password456",
    name: "Test User 2",
  },
];

export const login = (email, password) => {
  return (dispatch) => {
    const user = mockUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      console.log("inside LOGIN_SUCCESS");
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

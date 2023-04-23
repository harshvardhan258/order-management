import { FILTER_ORDERS } from "../constants/actionTypes";

const initialState = "";

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_ORDERS:
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer;

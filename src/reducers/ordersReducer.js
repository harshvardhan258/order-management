import {
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILURE,
} from "../constants/actionTypes";

const initialState = {
  orders: [],
  error: null,
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload,
        error: null,
      };
    case FETCH_ORDERS_FAILURE:
      return {
        ...state,
        orders: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default ordersReducer;

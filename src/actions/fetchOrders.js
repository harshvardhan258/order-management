import {
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILURE,
} from "../constants/actionTypes";
import orders from "../constants/Orders";

export const fetchOrders = () => {
  console.log(orders);
  return (dispatch) => {
    if (orders) {
      dispatch({
        type: FETCH_ORDERS_SUCCESS,
        payload: orders,
      });
    } else {
      dispatch({
        type: FETCH_ORDERS_FAILURE,
        payload: "error while getting Orders",
      });
    }
  };
};

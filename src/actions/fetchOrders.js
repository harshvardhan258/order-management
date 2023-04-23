import {
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILURE,
} from "../constants/actionTypes";
import ordersData from "../mocks/orders.json";

export const fetchOrders = () => {
  return (dispatch) => {
    if (ordersData) {
      dispatch({
        type: FETCH_ORDERS_SUCCESS,
        payload: ordersData,
      });
    } else {
      dispatch({
        type: FETCH_ORDERS_FAILURE,
        payload: "error while getting Orders",
      });
    }
  };
};

import { FILTER_ORDERS } from "../constants/actionTypes";

export const filterOrders = (searchTerm) => {
  return {
    type: FILTER_ORDERS,
    payload: searchTerm,
  };
};

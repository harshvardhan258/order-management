import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "./reducers/authReducer";
import ordersReducer from "./reducers/ordersReducer";
import filterReducer from "./reducers/filterReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
  orders: ordersReducer,
  filter: filterReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

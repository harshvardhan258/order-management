import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "./reducers/authReducer";
import ordersReducer from "./reducers/ordersReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
  orders: ordersReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

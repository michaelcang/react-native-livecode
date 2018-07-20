import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducer";
import reduxThunk from "redux-thunk";

const initialState = {
  board: [["", "", ""], ["", "", ""], ["", "", ""]],
  winner: ""
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(reduxThunk))
);

export default store;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import mainReducer from "./slice";

const reducer = combineReducers({
  mainReducer,
});

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    console.log(action.payload.mainReducer, "*** Action ***");
    console.log(state, "*** STATE ***");
    const nextState = {
      ...state,
      mainReducer: { ...state.mainReducer },
    };
    return nextState;
  } else {
    return reducer(state, action);
  }
};

const store = configureStore({
  reducer: masterReducer,
});

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);

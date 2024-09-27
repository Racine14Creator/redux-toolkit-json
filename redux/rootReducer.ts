import { combineReducers } from "redux";
import counterSlice from "./slice/counterSlice";

const rootReducer = combineReducers({
  counter: counterSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

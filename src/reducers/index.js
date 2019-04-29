import { combineReducers } from "redux";
import animalsReducer from "./animals";
import profileReducer from "./profile";
import appReducer from "./app";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  animals: animalsReducer,
  profile: profileReducer,
  app: appReducer,
  form: formReducer
});

export default rootReducer;

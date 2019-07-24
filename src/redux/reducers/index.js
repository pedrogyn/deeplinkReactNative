import { combineReducers } from "redux";

import Home from "./HomeReducer";
import nav from "./NavReducer";
const reducers = combineReducers({ Home, nav });

export default reducers;

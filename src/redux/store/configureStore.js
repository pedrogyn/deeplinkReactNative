import { createStore, applyMiddleware, compose } from "redux";
import reducers from "../reducers/";
import thunk from "redux-thunk";

import { createReactNavigationReduxMiddleware } from "react-navigation-redux-helpers";

const navigationMiddleware = createReactNavigationReduxMiddleware(
  state => state.nav
);

const enhancer = applyMiddleware(navigationMiddleware);
const store = createStore(reducers, enhancer);

export default store;

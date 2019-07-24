import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Offerings from "./screens/Offerings";
import Products from "./screens/Products";
import Checkout from "./screens/Checkout";

const stackNavigator = createStackNavigator({
  Home,
  Profile,
  Offerings,
  Products,
  Checkout
});

const Routes = createAppContainer(stackNavigator);

export default Routes;

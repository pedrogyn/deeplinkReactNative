/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import { Provider, connect } from "react-redux";

import Routes from "./Routes";

const Root = createReduxContainer(Routes);
const Navigation = connect(state => ({ state: state.nav }))(Root);

import store from "./redux/store/configureStore";

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

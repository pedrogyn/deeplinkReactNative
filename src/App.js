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
import { createReduxContainer } from "react-navigation-redux-helpers";

import Routes from "./Routes";

const Root = createReduxContainer(Routes);
const Navigation = connect(state => ({ state: state.nav }))(Root);

import store from "./redux/store/configureStore";

export default class App extends Component {

  componentDidMount(){
    console.log(Navigation)
  }

  render() {
    return (
      <Provider store={store}>
        {/* <Navigation />  Not work deeplink function*/}
        <Routes />
      </Provider>
    );
  }
}

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';

import { Provider, connect } from 'react-redux';

import Routes from './Routes';

import store from './redux/store/configureStore';

export default class App extends Component {
  async componentDidMount() {
    setTimeout(() => {
      Linking.getInitialURL()
        .then(url => {
          console.log('URL is: ', url);
          alert('URL is: ', url);
        })
        .catch(err => {
          console.log('Err: ', err);
        });
    }, 3000);

    // Linking.addEventListener("url", this.handleOpenURL);
  }

  componentWillUnmount() {
    // Linking.removeEventListener("url", this.handleOpenURL);
  }

  handleOpenURL = event => {
    alert(event.url);
  };

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

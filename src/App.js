/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Linking } from 'react-native';

import { Provider } from 'react-redux';

import Routes from './Routes';

import store from './redux/store/configureStore';

import NavigationService from './services/Navigation';
import parseDeeplinkData from './services/Deeplink';

export default class App extends Component {
  componentDidMount() {
    Linking.getInitialURL()
      .then(url => {
        if (url) {
          this.handleOpenURL(url);
        }
      })
      .catch(err => {
        console.log('Err: ' + err);
        alert('Err: ' + err);
      });

    Linking.addEventListener('url', this.handleOpenURL);
  }

  componentDidUpdate() {
    console.log('update');
  }

  handleOpenURL = data => {
    let url = data;

    if (data.url) {
      url = data.url;
    }
    let document = parseDeeplinkData(url);
    if(document.feature){
      NavigationService.navigate(document.feature)
      // set data on reducer deeplink if you need
    }
  };

  render() {
    return (
      <Provider store={store}>
        <Routes
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}

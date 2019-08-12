import React, { Component } from "react";
import { View, Text, Linking } from "react-native";

export default class Home extends Component {
  componentDidMount() {

    Linking.getInitialURL()
      .then((url) => {
        console.log("URL is: ", url)
      })
      .catch(err => {
        console.log("Err: ", err)
      })

    Linking.addEventListener("url", this.handleOpenURL);
  }

  componentWillUnmount() {
    // Linking.removeEventListener("url", this.handleOpenURL);
  }

  handleOpenURL = event => {
    alert(event.url);
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text> Home </Text>
      </View>
    );
  }
}

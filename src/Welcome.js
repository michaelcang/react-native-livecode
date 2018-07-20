import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native Tic Tac Toe!</Text>
        <Text style={styles.instructions}>
          To get started, click button below
        </Text>
        <Button
          title={"Let's play"}
          onPress={() => this.props.navigation.navigate("Board")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

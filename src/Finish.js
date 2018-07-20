import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class Finish extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Finish Tic Tac Toe!</Text>
        <Button
          title={"To Play Again"}
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

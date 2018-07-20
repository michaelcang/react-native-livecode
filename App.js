import React from "react";
import { createStackNavigator } from "react-navigation";
import { Provider } from "react-redux";

import Welcome from "./src/Welcome";
import Board from "./src/Board";
import Finish from "./src/Finish";

import store from "./src/redux/store";

const RootStack = createStackNavigator(
  {
    Welcome: Welcome,
    Board: Board,
    Finish: Finish,
  },
  {
    initialRouteName: "Welcome"
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}

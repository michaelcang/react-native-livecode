import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFinish: false,
      isPlaying: false,
      board: [["", "", ""], ["", "", ""], ["", "", ""]],
      winner: "",
      currentPlayer: "X",
      turn: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  static navigationOptions = {
    title: "TicTacToe"
  };

  handleClick(row, column) {
    let currentBoard = this.state.board;
    if (!currentBoard[row][column]) {
      player = this.state.currentPlayer;
      currentBoard[row][column] = player;
      if (player === "O") {
        this.setState(
          {
            currentPlayer: "X",
            board: currentBoard,
            winner: "O"
          },
          () => {
            this.checkWin();
          }
        );
      } else {
        this.setState(
          {
            currentPlayer: "O",
            board: currentBoard,
            winner: "X"
          },
          () => {
            this.checkWin();
          }
        );
      }
    }
  }

  checkWin() {
    let board = this.state.board;
    let diagonalRight = board[0][0] + board[1][1] + board[2][2];
    let diagonalLeft = board[0][2] + board[1][1] + board[2][0];
    let columnLeft = board[0][0] + board[1][0] + board[2][0];
    let columnRight = board[0][1] + board[1][1] + board[2][1];
    let columnMid = board[0][2] + board[1][2] + board[2][2];
    if (
      diagonalRight === "XXX" ||
      diagonalRight === "OOO" ||
      diagonalLeft === "XXX" ||
      diagonalLeft === "OOO" ||
      columnLeft === "XXX" ||
      columnLeft === "OOO" ||
      columnMid === "XXX" ||
      columnMid === "OOO" ||
      columnRight === "XXX" ||
      columnRight === "OOO"
    ) {
      return this.setState(
        {
          isFinish: true,
          board: [["", "", ""], ["", "", ""], ["", "", ""]]
        },
        () => {
          this.props.navigation.navigate("Finish", {
            winner: this.state.winner
          });
        }
      );
    }
    for (let i = 0; i < board.length; i++) {
      const row = board[i];
      if (row.join("") === "XXX" || row.join("") === "OOO") {
        return this.setState(
          {
            isFinish: true,
            board: [["", "", ""], ["", "", ""], ["", "", ""]]
          },
          () => {
            this.props.navigation.navigate("Finish", {
              winner: this.state.winner
            });
          }
        );
      }
    }
  }

  renderRow(row, index) {
    if (index !== 1) {
      return (
        <View key={index} style={styles.row}>
          <TouchableOpacity
            style={styles.cell}
            onPress={() => this.handleClick(index, 0)}
          >
            <Text>{row[0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.middleColumn}
            onPress={() => this.handleClick(index, 1)}
          >
            <Text>{row[1]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cell}
            onPress={() => this.handleClick(index, 2)}
          >
            <Text>{row[2]}</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View key={index} style={styles.middleRow}>
          <TouchableOpacity
            style={styles.cell}
            onPress={() => this.handleClick(index, 0)}
          >
            <Text>{row[0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.middleColumn}
            onPress={() => this.handleClick(index, 1)}
          >
            <Text>{row[1]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cell}
            onPress={() => this.handleClick(index, 2)}
          >
            <Text>{row[2]}</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{`Player: ${this.state.currentPlayer}`}</Text>
        <View style={styles.board}>
          {this.state.board.map((row, index) => this.renderRow(row, index))}
        </View>
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
  board: {
    height: 150,
    width: 150,
    borderWidth: 1,
    borderColor: "black"
  },
  middleRow: {
    flex: 1,
    flexDirection: "row",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "black"
  },
  row: {
    flex: 1,
    flexDirection: "row"
  },
  cell: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50
  },
  middleColumn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: "black"
  }
});

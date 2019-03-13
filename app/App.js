/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import CreateNewAcc from "./CreateNewAcc";
import List from "./List";
import ReadString from "./ReadString";
import SetString from "./SetString";

type Props = {};
export default class App extends Component<Props> {
  state = { loading: true, drizzleState: null };

  componentDidMount() {
    const { drizzle } = this.props;

    this.unsubscribe = drizzle.store.subscribe(() => {
      const drizzleState = drizzle.store.getState();

      if (drizzleState.drizzleStatus.initialized) {
        this.setState({ loading: false, drizzleState });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading ? (
          <Text>Loading...</Text>
        ) : (
            <View>
              <ReadString
                drizzle={this.props.drizzle}
                drizzleState={this.state.drizzleState}
              />
              <SetString
                drizzle={this.props.drizzle}
                drizzleState={this.state.drizzleState}
              />
              <CreateNewAcc
                drizzle={this.props.drizzle}
                drizzleState={this.state.drizzleState}
              />
              <List />
            </View>
          )}
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
  }
});

import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FadeImage } from "./FadeImage";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 48
  }
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>NodeSchool SF</Text>
        <FadeImage />
      </View>
    );
  }
}

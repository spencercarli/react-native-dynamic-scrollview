import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default props => (
  <View style={styles.card}>
    <Text style={styles.text}>{props.children}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    minHeight: 333
  },
  text: {
    fontSize: 30,
    marginBottom: 20,
    color: "#4A4A4A",
  },
});

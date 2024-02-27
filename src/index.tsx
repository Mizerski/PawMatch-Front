import { View, Text, StyleSheet } from "react-native";
import { Card } from "./Components/Card";
import React from "react";
import { colors } from "./Styles/Colors";

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.card,
    alignItems: "center",
    justifyContent: "center",
  },
});

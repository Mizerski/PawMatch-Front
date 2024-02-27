import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../Styles/Colors";

export function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
    alignItems: "center",
    justifyContent: "center",
  },
});

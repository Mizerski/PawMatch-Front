import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../Styles/Colors";

export function Card() {
  return (
    <View style={styles.card}>
      <Text style={styles.petInfo}>Mia</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 10,
    width: 300,
    height: 500,
  },
  petInfo: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.font_pink,
  },
});

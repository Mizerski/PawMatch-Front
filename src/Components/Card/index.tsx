import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { colors } from "../../Styles/Colors";
interface CardProps {
  name: string;
  age: number;
  photo?: any;
}

export function Card({ name, age, photo }: CardProps) {
  const pressTest = () => {
    console.log("pet selected!", name, age);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pressTest} style={styles.info}>
        <Text style={styles.name_info}>{name}, </Text>
        <Text style={styles.age_info}>Idade: {age}</Text>
        <View style={styles.info_image}>
          <Image
            style={styles.info_image}
            source={{
              uri: photo,
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    padding: 10,
    margin: 10,
    width: "44%",
    borderRadius: 10,
  },
  age_info: {
    color: colors.font_gray,
  },
  name_info: {
    color: colors.font_pink,
  },
  info: {},
  info_image: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    width: "100%",
    height: 100,
  },
});

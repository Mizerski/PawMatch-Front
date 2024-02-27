import React from "react";
import { View, StyleSheet } from "react-native";
import { Card } from "../Card";

interface BoardProps {
  data: any;
}
export function Board({ data }: BoardProps) {
  return (
    <>
      <View style={styles.content}>
        <View style={styles.container}>
          {data.map(
            (
              item: { name: string; age: number; photo: string },
              index: React.Key | null | undefined
            ) => (
              <Card
                key={index}
                name={item.name}
                age={item.age}
                photo={item.photo}
              />
            )
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "flex-start",
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingTop: "15%",
  },
});

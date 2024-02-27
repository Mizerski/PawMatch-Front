import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Board } from "./Components/Board";
import React from "react";
import { colors } from "./Styles/Colors";

export function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Board
        data={[
          {
            name: "Rex",
            age: 5,
            photo:
              "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
          },
          {
            name: "Bella",
            age: 3,
            photo:
              "https://www.pedigree.in/cdn-cgi/image/format=auto,q=90/sites/g/files/fnmzdf4446/files/2022-04/355801736_shutterstock_705132340_01.jpg",
          },
          {
            name: "Charlie",
            age: 4,
            photo:
              "https://media.wired.com/photos/65651b7225ccbd8cc7d5403c/master/pass/Science-Life-Extension-Drug-for-Big-Dogs-Is-Getting-Closer-1330545769.jpg",
          },
          {
            name: "Lucy",
            age: 2,
            photo:
              "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/11/02/USAT/71425670007-getty-images-1310147575.jpg",
          },
          {
            name: "Max",
            age: 6,
            photo: "https://ychef.files.bbci.co.uk/1280x720/p07ryyyj.jpg",
          },
          {
            name: "Rex",
            age: 5,
            photo:
              "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
          },
          {
            name: "Bella",
            age: 3,
            photo:
              "https://www.pedigree.in/cdn-cgi/image/format=auto,q=90/sites/g/files/fnmzdf4446/files/2022-04/355801736_shutterstock_705132340_01.jpg",
          },
          {
            name: "Charlie",
            age: 4,
            photo:
              "https://media.wired.com/photos/65651b7225ccbd8cc7d5403c/master/pass/Science-Life-Extension-Drug-for-Big-Dogs-Is-Getting-Closer-1330545769.jpg",
          },
          {
            name: "Lucy",
            age: 2,
            photo:
              "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/11/02/USAT/71425670007-getty-images-1310147575.jpg",
          },
          {
            name: "Max",
            age: 6,
            photo: "https://ychef.files.bbci.co.uk/1280x720/p07ryyyj.jpg",
          },
        ]}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

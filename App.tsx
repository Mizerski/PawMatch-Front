import { StyleSheet, Text, View } from 'react-native';
import { colors } from './Styles/Colors';
import {Card} from "./Components/Card";

export default function App() {
  return (
   <View style={styles.container}>
      <Card/>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
  },
});

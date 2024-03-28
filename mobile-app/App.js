import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform} from 'react-native';
import {COLORS} from "./src/colors"
import Slider from './src/components/Slider';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        flex: 1,
        backgroundColor: COLORS.black,
        paddingTop: Platform.OS === "android" && 50,
      }}>
        <Slider />
        <Text>Hello</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

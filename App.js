import React from "react";
import {
  StyleSheet,
  Text,
  Alert,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  TouchableHighlight,
  Button,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("Text is Pressed");
  const handleBtnPress = () =>
    Alert.alert("Title", "Message", [
      { text: "Yes", onPress: () => console.log("YES") },
      { text: "No", onPress: () => console.log("NO") },
    ]);
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Click Me!" onPress={handleBtnPress} color="dodgerblue" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  safeAreaView: {
    backgroundColor: "orange",
  },
});

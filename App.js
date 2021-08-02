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
  Dimensions,
} from "react-native";

export default function App() {
  console.log(Dimensions.get("screen"));
  console.log(StatusBar.currentHeight);
  return <SafeAreaView style={styles.safeAreaView}></SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  safeAreaView: {
    backgroundColor: "dodgerblue",
    width: 150,
    height: 70,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

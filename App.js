// import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import InshortTabs from './components/InshortTabs';

export default function App() {
  return (
    <View style={{ ...styles.container,backgroundColor: "#082c6c"}}>
      <InshortTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

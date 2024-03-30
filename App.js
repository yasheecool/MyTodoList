import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import MainComponent from "./src/components/MainComponent";
import AddNewToDoScreen from "./src/components/AddNewToDoScreen";

export default function App() {
  return <AddNewToDoScreen></AddNewToDoScreen>;
}

const styles = StyleSheet.create({});

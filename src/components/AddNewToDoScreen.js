import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const AddNewToDoScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Add New To-do Item</Text>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="cancel" size={24} color="black" />
          <Text> CANCEL </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text> SAVE </Text>
          <Feather name="save" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    // <SafeAreaView style={styles.headingContainer}>
    //   <Text style={styles.heading}>My To-do List</Text>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headingContainer: {
    alignItems: "center",
    backgroundColor: "#20A9FE",
  },
  heading: {
    padding: 10,
    fontSize: 20,
    fontWeight: "700",
    color: "#FAFAFA",
    fontFamily: "Helvetica",
  },

  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#20A9FE",
    padding: 10,
    margin: 20,
    borderRadius: 20,
    // fontSize: 20,
  },
});

export default AddNewToDoScreen;

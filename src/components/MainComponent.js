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

const MainComponent = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <SafeAreaView style={styles.headingContainer}>
        <Text style={styles.heading}>My To-do List</Text>
      </SafeAreaView>

      {/* <View style={styles.contentContainer}> */}
      <View style={styles.listContainer}>
        <View style={styles.listItemContainer}>
          <Text style={styles.listItem}>1. Make the to-do list</Text>
        </View>
        <View style={styles.listItemContainer}>
          <Text style={styles.listItem}>2. Upload Code to GitHub</Text>
        </View>
        <View style={styles.listItemContainer}>
          <Text style={styles.listItem}>3. Submit Assignment</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Ionicons name="add-circle-outline" size={24} color="black" />
        <Text> ADD NEW TO DO </Text>
      </TouchableOpacity>

      {/* </View> */}
    </View>
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
  // contentContainer: {
  //   flex: 1,
  //   padding: 20,
  //   // backgroundColor: "#F4F4F4",
  // },
  listContainer: {
    justifyContent: "flex-start",
    backgroundColor: "#F4F4F4",
    borderRadius: 20,
    margin: 20,
    // padding:
    padding: 20,
  },
  listItemContainer: {
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    fontFamily: "Helvetica",
    marginBottom: 10,
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

export default MainComponent;

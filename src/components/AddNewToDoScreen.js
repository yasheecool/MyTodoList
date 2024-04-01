import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AddNewToDoScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Add New To-do Item</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputHeadingText}>Title</Text>

        <View style={styles.titleInput}>
          <TextInput placeholder="Enter your text here"></TextInput>
        </View>

        <Text style={styles.inputHeadingText}>Description</Text>

        <View>
          <TextInput
            multiline={true}
            placeholder="Enter your text here"
            style={styles.descInput}
            numberOfLines={3}
          ></TextInput>
        </View>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button} onPress={navigation.goBack}>
          <MaterialCommunityIcons name="cancel" size={20} color="black" />
          <Text> CANCEL </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons name="content-save" size={20} color="black" />
          <Text> SAVE </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
    justifyContent: "center",
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

  inputContainer: {
    margin: 20,
    flex: 1,
    // backgroundColor: "yellow",
  },

  inputHeadingText: {
    fontSize: 17.5,
    fontWeight: "700",
    color: "black",
    fontFamily: "Helvetica",
  },

  titleInput: {
    // backgroundColor: "red",
    height: 30,
    marginBottom: 15,
    marginTop: 3,
    borderWidth: "1",
    borderRadius: "5",
    padding: 5,
    // margin: 10,
  },

  descInput: {
    borderWidth: "1",
    borderRadius: "5",
    padding: 5,
    marginTop: 3,
    // backgroundColor: "red",
  },
});

export default AddNewToDoScreen;
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Notification from "./Notification";
import { Ionicons } from "@expo/vector-icons";

const AddNewToDoScreen = ({ navigation, route }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [displayingNotification, triggerNotification] = useState(false);

  const { todo, addTodos } = route.params;

  const clearInputFields = () => {
    setTitle("");
    setDescription("");
  };

  const saveBtnHandler = () => {
    if (title.trim() && description.trim()) {
      triggerNotification(true); //Triggering Notification
      clearInputFields();
      addTodos({ title, description, isCompleted: false, id: todo.length + 1 });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Add New To-do Item</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputHeadingText}>Title</Text>

        <View style={styles.titleInput}>
          <TextInput
            placeholder="Enter the title of your To-do here!"
            onChangeText={(val) => {
              setTitle(val);
            }}
          ></TextInput>
        </View>

        <Text style={styles.inputHeadingText}>Description</Text>

        <View>
          <TextInput
            multiline={true}
            placeholder="Enter the description of your To-do here!"
            style={styles.descInput}
            numberOfLines={3}
            onChangeText={(val) => {
              setDescription(val);
            }}
          ></TextInput>
        </View>
      </View>

      {displayingNotification && <Notification />}

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button} onPress={navigation.goBack}>
          <Ionicons name="arrow-back" size={20} color="black" />
          <Text> BACK </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => saveBtnHandler()}
        >
          <Ionicons name="save-sharp" size={20} color="black" />
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
  },

  inputContainer: {
    margin: 20,
    flex: 1,
  },

  inputHeadingText: {
    fontSize: 17.5,
    fontWeight: "700",
    color: "black",
    fontFamily: "Helvetica",
  },

  titleInput: {
    height: 30,
    marginBottom: 15,
    marginTop: 3,
    borderWidth: "1",
    borderRadius: "5",
    padding: 5,
  },

  descInput: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginTop: 3,
  },
});

export default AddNewToDoScreen;

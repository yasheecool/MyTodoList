import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import Notification from "../components/Notification";
import Button from "../components/Button";

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
      triggerNotification(true);
      addTodos({ title, description, id: todo.length + 1 });
      clearInputFields();
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
            value={title}
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
            value={description}
          ></TextInput>
        </View>
      </View>

      {displayingNotification && <Notification />}

      <View style={styles.btnContainer}>
        <Button
          style={styles.button}
          onClickFn={navigation.goBack}
          iconName={"arrow-back"}
          text={"BACK"}
        />

        <Button
          style={styles.button}
          onClickFn={saveBtnHandler}
          iconName={"save-sharp"}
          text={"SAVE"}
        />
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

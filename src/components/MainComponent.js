import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TodoItem from "./TodoItem";
import { saveData, loadData } from "../datamodel/storageFunctions";

const MainComponent = ({ navigation }) => {
  const [todo, updateTodo] = useState([]);

  const addTodos = (newTodo) => {
    updateTodo([...todo, newTodo]);
    saveData(todo); //Saving data to storage
  };

  useEffect(() => {
    const firstLoad = async () => {
      const data = await loadData();
      updateTodo(data);
    };
    firstLoad();
  }, []);

  useEffect(() => {
    saveData(todo);
  }, [todo]);

  const deleteTodo = (idx) => {
    const newTasks = [...todo];
    newTasks.splice(todo.length - 1, 1);
    updateTodo(newTasks);
  };

  const navToNewToDo = () =>
    navigation.navigate("Add New To-Do", { todo, addTodos });

  const renderList = ({ item }) => {
    return (
      <TodoItem
        id={item.id}
        title={item.title}
        description={item.description}
        deleteFn={deleteTodo}
      ></TodoItem>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>My To-do List</Text>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={todo}
          renderItem={renderList}
          keyExtractor={(currTask) => currTask.id.toString()}
        ></FlatList>
      </View>

      <TouchableOpacity style={styles.button} onPress={navToNewToDo}>
        <Ionicons name="add-circle-outline" size={24} color="black" />
        <Text> ADD NEW TO DO </Text>
      </TouchableOpacity>
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
  },
  heading: {
    padding: 10,
    fontSize: 20,
    fontWeight: "700",
    color: "#FAFAFA",
    fontFamily: "Helvetica",
  },

  listContainer: {
    justifyContent: "flex-start",
    margin: 15,
    padding: 10,
  },

  listItem: {
    fontFamily: "Helvetica",
    backgroundColor: "#F4F4F4",
    padding: 12,
    borderRadius: 15,
    marginBottom: 15,
    flexDirection: "row",
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
});

export default MainComponent;

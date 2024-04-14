import React, { useState } from "react";
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

const MainComponent = ({ navigation }) => {
  // const todoStructure = {
  //   id: 1,
  //   title: "First Title",
  //   description: "Description",
  //   isCompleted: false,
  // };
  const [todo, updateTodo] = useState([]);

  const addTodos = (newTodo) => {
    updateTodo([...todo, newTodo]);
  };

  const navToNewToDo = () =>
    navigation.navigate("Add New To-Do", { todo, addTodos });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>My To-do List</Text>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={todo}
          renderItem={({ item }) => {
            console.log(item);
            return (
              <TodoItem
                id={item.id}
                title={item.title}
                description={item.description}
              ></TodoItem>
              // <View style={styles.listItem}>
              //   <Text>{item.id}. </Text>
              //   <Text>{item.title}</Text>
              // </View>
            );
          }}
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
    // backgroundColor: "yellow",
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

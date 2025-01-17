import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import TodoItem from "../components/TodoItem";
import Button from "../components/Button";
import { saveData, loadData } from "../datamodel/storageFunctions";

const HomeScreen = ({ navigation }) => {
  const [todo, updateTodo] = useState([]);

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

  function addNewTodo(title, description) {
    // console.log("add function called");
    updateTodo((prevTodos) => [
      ...prevTodos,
      { title, description, id: prevTodos.length },
    ]);
  }

  const deleteTodo = (itmId) => {
    console.log("id", itmId);
    const newTodo = todo.filter((todo) => todo.id !== itmId);
    updateTodo(newTodo);
  };

  const navToNewToDo = () =>
    navigation.navigate("Add New To-Do", { addNewTodo });

  const renderList = ({ item }) => {
    return (
      <TodoItem
        id={item.id}
        title={item.title}
        description={item.description}
        deleteFn={() => deleteTodo(item.id)}
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

      <Button
        style={styles.button}
        onClickFn={navToNewToDo}
        iconName={"add-circle-outline"}
        text={"ADD NEW TO DO"}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
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
    flex: 1,
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

export default HomeScreen;

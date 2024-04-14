import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default TodoItem = ({ id, title, description }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpandedMode = () => {
    setExpanded(!expanded);
    console.log(expanded);
  };

  return (
    <View style={styles.listItem}>
      <View style={styles.titleIcon}>
        <Text style={styles.title}>
          {id}. {title}
        </Text>

        <TouchableOpacity style={styles.button} onPress={toggleExpandedMode}>
          <Ionicons
            name={
              expanded ? "caret-up-circle-outline" : "caret-down-circle-outline"
            }
            size={22}
            color="black"
          />
        </TouchableOpacity>
      </View>

      {expanded && (
        <View>
          <Text>{description}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    fontFamily: "Helvetica",
    backgroundColor: "#F4F4F4",
    padding: 12,
    borderRadius: 15,
    marginBottom: 15,
    flexDirection: "column",
  },
  titleIcon: {
    flexDirection: "row",
    width: "100%",
    // backgroundColor: "yellow",
  },
  title: {
    flex: 1,
  },
});
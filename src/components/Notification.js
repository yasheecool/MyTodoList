import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default Notification = () => {
  return (
    <View style={styles.notification}>
      <AntDesign name="infocirlceo" size={20} color="black" />
      <Text>To-Do successfully added !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  notification: {
    alignSelf: "center",
    backgroundColor: "#7abfeb",
    padding: 10,
    borderRadius: 15,
    flexDirection: "row",
  },
});

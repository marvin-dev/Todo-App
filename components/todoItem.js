import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function todoItem(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.goalsContainer}>
        <Text>{props.todo}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default todoItem;

const styles = StyleSheet.create({
  goalsContainer: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: "#ccc",
  },
});

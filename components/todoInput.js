import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Text } from "react-native";

function todoInput(props) {
  const [todo, setTodo] = useState("");

  const inputHandler = (enteredText) => {
    setTodo(enteredText);
  };

  const clearInput = () => {
    props.submit(todo);
    setTodo("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.content}>
        <TextInput
          placeholder="Add todo"
          style={styles.input}
          onChangeText={inputHandler}
          value={todo}
        />
        {/* <Button
          title="Cancel"
          style={styles.btn}
          color="red"
          onPress={props.onCancel}
        /> */}
        <Text onPress={props.onCancel} style={styles.cancelBtn}>
          cancel
        </Text>
        <Text
          // onPress={props.submit.bind(this, todo)}
          onPress={clearInput}
          style={styles.addBtn}
        >
          add
        </Text>
        {/* <Button
          title="Add"
          style={styles.btn}
          // onPress={props.submit.bind(this, todo)}
          onPress={clearInput}
        /> */}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderColor: "gray",
    borderWidth: 2,
    width: "80%",
    marginBottom: 20,
    padding: 8,
  },
  addBtn: {
    color: "blue",
    textTransform: "uppercase",
    fontSize: 16,
  },
  cancelBtn: {
    color: "red",
    textTransform: "uppercase",
    fontSize: 16,
    marginBottom: 10,
  },
});

export default todoInput;

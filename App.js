import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import TodoItem from "./components/todoItem";
import TodoInput from "./components/todoInput";

export default function App() {
  const [addedGoals, setAddedGoals] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const addTodoBtn = (todoTitle) => {
    setAddedGoals((currentTodo) => [
      ...currentTodo,
      { id: Math.random().toString(), value: todoTitle },
    ]);
    setOpenModal(false);
  };

  const deleteTodo = (todoId) => {
    setAddedGoals((currentTodo) => {
      return currentTodo.filter((remTodo) => remTodo.id !== todoId);
    });
  };

  const cancelAdding = () => {
    setOpenModal(false);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Todo List</Text>
      <Button title="Add Tasks" onPress={() => setOpenModal(true)} />
      <TodoInput
        visible={openModal}
        submit={addTodoBtn}
        onCancel={cancelAdding}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={addedGoals}
        renderItem={(itemData) => (
          <TodoItem
            id={itemData.item.id}
            onDelete={deleteTodo}
            todo={itemData.item.value}
          />
        )}
        style={{ marginBottom: 70 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 40,
  },
  title: {
    marginBottom: 20,
    fontWeight: "bold",
    fontSize: 21,
  },
});

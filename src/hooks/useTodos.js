import { useState } from "react";
import { v4 as uuidv } from "uuid";
import UserData from "../components/user";
import useLocalStorage from "./useLocalStorage";
import { useModal } from "./useModal";

const useTodos = () => {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
    setItem,
    onChangeOrder,
    userName,
  } = useLocalStorage("TODO_V1", []);

  const [searchValue, setSearch] = useState("");

  const { ModalView, openModal, closeModal } = useModal();

  const compledTodos = todos.filter((todo) => todo.completed).length;

  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.title.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    });
  }

  const toggleCompleteTodos = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;

    saveTodos(newTodos);
  };

  //add todo

  const addTodo = ({ ...props }) => {
    const { title, content } = props;

    const newTodos = [...todos];
    newTodos.push({
      id: uuidv(),
      completed: false,
      creation_date: new Date().toLocaleString(),
      title,
      content,
    });
    saveTodos(newTodos);
  };

  const DeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);

    saveTodos(newTodos);
  };

  return {
    loading,
    error,
    totalTodos,
    compledTodos,
    searchValue,
    setSearch,
    searchedTodos,
    toggleCompleteTodos,
    DeleteTodo,
    addTodo,
    ModalView,
    openModal,
    closeModal,
    setItem,
    onChangeOrder,
    UserData,
    userName,
  };
};

export { useTodos };

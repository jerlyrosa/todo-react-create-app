import React, { useState } from "react";
import { AppUI } from "./AppUI";

const defaulTodo = [
  { text: "New User Test Task", completed: false },
];

function App() {
  const localStorageTodos = localStorage.getItem("TODOS_V1");
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem("TODOS_V1", JSON.stringify(defaulTodo));
    parsedTodos = defaulTodo;
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  
  const [todos, setTodo] = useState(parsedTodos);
  const [searchValue, setSearch] = useState("");
  

  const compledTodos = todos.filter((todo) => todo.completed).length;

  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });

  }

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodo(newTodos);
  };

  const toggleCompleteTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;

    saveTodos(newTodos);
  };


  const DeleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);

    saveTodos(newTodos);
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      compledTodos={compledTodos}
      searchValue={searchValue}
      setSearch={setSearch}
      searchedTodos={searchedTodos}
      toggleCompleteTodos={toggleCompleteTodos}
      DeleteTodo={DeleteTodo}
    />
  );
}

export default App;

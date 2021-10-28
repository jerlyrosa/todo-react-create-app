import React, { useState } from "react";
import { AppUI } from "./AppUI";
import  useLocalStorage  from '../hooks/useLocalStorage'



const defaulTodo = [
  { text: "New User Test Task", completed: false },
];


function App() {
  
  const [ todos,saveTodos ] = useLocalStorage('TODO_V1',defaulTodo)

  console.log(todos);
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

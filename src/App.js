import React,{ Fragment }  from "react";
import TodoCounter from "./components/todo-counter";
import TodoSearch from "./components/todo-search";
import TodoList from "./components/todo-list";
import TodoItem from "./components/todo-item";
import CreateTodoButton from "./components/create-todo-button";
import GlobalStyle from './components/styles/globalStyles.js'


function App() {

  const  todos =[
    {text: 'Conocer coltura nordica', compled:false},
    {text: 'Estudiar React', compled:false},
    {text: 'Ver anime', compled:false},


  ];

  return (
    <Fragment>
      <GlobalStyle />
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((item, index) => {
          return <TodoItem key={item.text} text={item.text} />;
        })}
      </TodoList>
      <CreateTodoButton />
    </Fragment>
  );
}

export default App;

import React,{ Fragment }  from "react";
import TodoCounter from "./components/todo-counter";
import TodoSearch from "./components/todo-search";
import TodoList from "./components/todo-list";
import TodoItem from "./components/todo-item";
import CreateTodoButton from "./components/create-todo-button";
import GlobalStyle from './components/styles/globalStyles.js'
import styled from "styled-components";
import Header from "./components/header";


function App() {

  const  todos =[
    {text: 'Conocer cultura nordicaaaaaa aaaaa aaaaaaa', compled:false},
    {text: 'Estudiar React', compled:false},
    {text: 'Ver anime', compled:false},


  ];

  return (
    <Fragment>
      <GlobalStyle />
      <Header/>
      <Container>
      <TodoSearch />
      <TodoCounter />
      <TodoList>
        {todos.map((item, index) => {
          return <TodoItem key={item.text} text={item.text} />;
        })}
      </TodoList>
      <CreateTodoButton />
      </Container>
    </Fragment>
  );
}

export default App;
const Container = styled.div`
  max-width: 60rem;
  margin: 0 auto;

`;



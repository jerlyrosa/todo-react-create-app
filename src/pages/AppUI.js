import React, { Fragment } from "react";
import TodoCounter from "../components/todo-counter";
import TodoSearch from "../components/todo-search";
import TodoList from "../components/todo-list";
import TodoItem from "../components/todo-item";
import CreateTodoButton from "../components/create-todo-button";
import GlobalStyle from "../components/styles/globalStyles.js";
import styled from "styled-components";
import Header from "../components/header";

const AppUI = (props) => {
  const {
    loading,
    error,
    searchValue,
    setSearch,
    totalTodos,
    compledTodos,
    searchedTodos,
    toggleCompleteTodos,
    DeleteTodo,
  } = props;


  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Container>
        <TodoSearch searchValue={searchValue} setSearch={setSearch} />
        <TodoCounter total={totalTodos} compled={compledTodos} />
        <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <h3>Estamos cargando, no desesperes...</h3>}
        {(!loading && !searchedTodos.length) && <h3>¡Crea tu primer TODO!</h3>}

          {searchedTodos.length > 0 ? (
            searchedTodos.map((item) => {
              return (
                <TodoItem
                  key={item.text}
                  text={item.text}
                  compled={item.completed}
                  onCompled={() => toggleCompleteTodos(item.text)}
                  onDelete={() => DeleteTodo(item.text)}
                />
              );
            })
          ) : searchValue.length > 0 ? (
            <h3>{`There are no tasks with the name ${searchValue} 😐`}</h3>
          ) :null
          }
        </TodoList>
        <CreateTodoButton />
      </Container>
    </Fragment>
  );
};

export { AppUI };

const Container = styled.div`
  max-width: 60rem;
  margin: 0 auto;
`;

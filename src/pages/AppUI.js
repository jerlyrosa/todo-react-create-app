import React, { useContext, Fragment } from "react";
import { TodoContext } from "../TodoContext";
import TodoCounter from "../components/todo-counter";
import TodoSearch from "../components/todo-search";
import TodoList from "../components/todo-list";
import TodoItem from "../components/todo-item";
import GlobalStyle from "../components/styles/globalStyles.js";
import styled,{css} from "styled-components";
import Header from "../components/header";
import { colors } from "../components/styles/colors";
import { TodoForm } from "../components/todoForm";


const AppUI = (props) => {

    const {                   
        error,
        loading,
        searchedTodos,
        toggleCompleteTodos,
        DeleteTodo,
        searchValue,
        ModalView,
        openModal
     } = useContext(TodoContext);


  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Container>
        <TodoSearch />
        <TodoCounter />
              <TodoList>
                {error && <p>There was mistake...</p>}
                {loading && <h3>It's loading, please wait...</h3>}
                {!loading && !searchedTodos.length  && searchValue.length > 1 ? (
                  <h3>{`There are no tasks with the name "${searchValue}" 😐`}</h3>
                ): 
                !loading && !searchedTodos.length && (
                  <h3>Create your first TODO!</h3>
                )}

                  {searchedTodos.map((item, index) => {
                    return (
                      <TodoItem
                        key={index}
                        text={item.text}
                        compled={item.completed}
                        onCompled={() => toggleCompleteTodos(item.text)}
                        onDelete={() => DeleteTodo(item.text)}
                      />
                       )
                  })
                  
                }
                
              </TodoList>
                    <ModalView>
                      <TodoForm/>
                   </ModalView>
                <Button 
                    onClick={openModal} 
                    bgColor={colors.primary.base} 
                    textColor={colors.text_cta} 
                    shadowColor={"rgba(115, 185, 255, 0.5)"}
                    bgHover={colors.cta_hover}
                
                > Add new</Button>
      </Container>
    </Fragment>
  );
};

export { AppUI };

const Container = styled.div`
  max-width: 60rem;
  word-wrap: break-word;
  margin: 0 auto;
  height: 80vh;
  ;
`;


const Button = styled.button`

${({bgColor, textColor, shadowColor, bgHover}) => css`
    display: flex;
    margin: 0 auto;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: ${bgColor};
    font-weight: bold;
    padding: 1rem;
    border-radius: 0.8rem;
    color: white;
    outline: initial;
    border: initial;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    &:focus{
        box-shadow: 0 0 0 0.32rem ${shadowColor};
    }
    &:hover{
        color: ${textColor};
        background-color:${bgHover};
   
    }
  `}
`;


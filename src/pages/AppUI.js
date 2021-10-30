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
import { useModal } from "../hooks/useModal";


const AppUI = (props) => {

    const {                   
        error,
        loading,
        searchedTodos,
        toggleCompleteTodos,
        DeleteTodo,
        searchValue,
     } = useContext(TodoContext);

     const {ModalView,openModal} = useModal();

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
                {searchValue.length > 0 ? (
                  <h3>{`There are no tasks with the name "${searchValue}" 😐`}</h3>
                ): 
                !loading && !searchedTodos.length && (
                  <h3>Create your first TODO!</h3>
                )}

                  {searchedTodos.map((item) => {
                    return (
                      <TodoItem
                        key={item.text}
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
                     <h2>Soy un modal y funciono</h2>
                   </ModalView>
               
                
              

            <CreateTodoButton
                onClick={openModal}
                bgColor={colors.primary.base} 
                textColor={colors.text_cta} 
                shadowColor={"rgba(115, 185, 255, 0.5)"}
                bgHover={colors.cta_hover}
                // setOpenModal={setOpenModal}
              >
                Add New
              </CreateTodoButton>
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


const CreateTodoButton = styled.button`

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
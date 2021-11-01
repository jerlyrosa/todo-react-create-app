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
import { TodosError } from "../components/loanding/todo-error";
import { TodosLoading } from "../components/loanding/todo-loading";
import { TodosEntry } from "../components/loanding/todo-entry";
import FooterUI from "../components/footer";


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
                {error && <TodosError erro={error}/> }
                {loading && <TodosLoading  item={searchedTodos}/>}
                {!loading && !searchedTodos.length  && searchValue.length ? (
                 <Title color={colors.text.base}>{`There are no tasks with the name "${searchValue}" 😐`}</Title>
                ): 
                !loading && !searchedTodos.length && (
                   <TodosEntry/>
                )}

                  {searchedTodos.map((item, index) => {
                    const {
                      id,
                      title,
                      content,
                      completed,
                      creation_date
                    } = item;

                    return (
                      <TodoItem
                        key={index}
                        id={id}
                        creation_date={creation_date}
                        title={title}
                        content={content}
                        compled={completed}
                        onCompled={() => toggleCompleteTodos(item.id)}
                        onDelete={() => DeleteTodo(item.id)}
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
  <FooterUI/>
    </Fragment>
  );
};

export { AppUI };

const Container = styled.section`
  max-width: 60rem;
  word-wrap: break-word;
  margin: 0 auto 2rem;
  /* min-height: calc(100vh - 25rem); */

  ;
`;


const Button = styled.button`

${({bgColor, textColor, shadowColor, bgHover}) => css`
    display: flex;
    margin: 0 auto;
    text-align: center;
    background-color: ${bgColor};
    font-weight: bold;
    padding: 1rem;
    border-radius: 0.8rem;
    color: white;
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

const Title = styled.h3`
color: ${props => props.color};
`;

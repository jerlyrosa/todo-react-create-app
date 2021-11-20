import React, { Fragment } from "react";
import { useTodos } from "../hooks/useTodos";

import TodoCounter from "../components/todo-counter";
import TodoSearch from "../components/todo-search";
import TodoList from "../components/todo-list";
import TodoItem from "../components/todo-item";
import GlobalStyle from "../components/styles/globalStyles.js";
import styled, { css } from "styled-components";
import Header from "../components/header";
import { colors } from "../components/styles/colors";
import { TodoForm } from "../components/todoForm";
import { TodosError } from "../components/loanding/todo-error";
import { TodosLoading } from "../components/loanding/todo-loading";
import { EmptyTodos } from "../components/loanding/todo-entry";
import FooterUI from "../components/footer";
import { TodoHeaderUI } from "../components/todo-header";
import TodosResult from "../components/loanding/todo-result";
import mq from "../components/styles/mq";

function App() {
  const {
    searchValue,
    setSearch,
    totalTodos,
    compledTodos,
    error,
    loading,
    searchedTodos,
    toggleCompleteTodos,
    DeleteTodo,
    ModalView,
    openModal,
    addTodo,
    closeModal,
    onChangeOrder
  } = useTodos();

  return (
    <Fragment>
      <TodoHeaderUI >
        <GlobalStyle />
        <Header />
      </TodoHeaderUI>

      <Layout>
        <Aside  > 
          <section >
             <h2 style={{paddingTop:"80%"}}>Working...</h2>
          </section>
          </Aside>
        <Container>

        <ContainerSection>
        <TodoSearch
          searchValue={searchValue}
          setSearch={setSearch}
          loading={loading}
        />
        </ContainerSection>
        <TodoCounter totalTodos={totalTodos} compledTodos={compledTodos} />
      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        onChangeOrder={onChangeOrder}
        onError={() => <TodosError />}
        onEmptyTodos={() => <EmptyTodos />}
        onLoading={() => <TodosLoading item={searchedTodos} />}
        onNotResult={() => <TodosResult searchValue={searchValue} />}
        render={(item) => {
          return (
            <TodoItem
              key={item.id}
              {...item}
              onCompled={() => toggleCompleteTodos(item.id)}
              onDelete={() => DeleteTodo(item.id)}
            />
          );
        }}
      >
        <ModalView>
          <TodoForm addTodo={addTodo} closeModal={closeModal} />
        </ModalView>
        <div as="li">
          <Button
            onClick={openModal}
            bgColor={colors.primary.base}
            textColor={colors.text_cta}
            shadowColor={"rgba(115, 185, 255, 0.5)"}
            bgHover={colors.cta_hover}
          >
            Add new
          </Button>
        </div>
      </TodoList>

      </Container>
      </Layout>

      <FooterUI />
    </Fragment>
  );
}

export default App;

const Layout = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    ${mq.md} {
    flex-direction: initial;
  }
`;

const Aside = styled.aside`
color: #606060;
box-shadow: 0rem 0rem 1rem rgba(140 143 145 / 50%);

${mq.md} {
    min-height: 77vh;
    align-self: center;
    margin-right: 1rem;
    flex: 20%;
  }


`;

const Container = styled.main`
  ${mq.md} {
    align-self: flex-start;
    flex: 80%;
  }

`;

const ContainerSection = styled.section`
  display: flex;
  justify-content: center;
  margin-top:4rem;
  ${mq.md}{
    margin: 4rem  7rem 2rem 0;
    justify-content: end;
  }

`;


const Button = styled.button`
  ${({ bgColor, textColor, shadowColor, bgHover }) => css`
    display: flex;
    margin: 5rem auto 0;
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
    &:focus {
      box-shadow: 0 0 0 0.32rem ${shadowColor};
    }
    &:hover {
      color: ${textColor};
      background-color: ${bgHover};
    }
  `}
`;

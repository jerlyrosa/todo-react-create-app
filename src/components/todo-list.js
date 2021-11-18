import React from "react";
import styled from "styled-components";
import { ReactSortable } from "react-sortablejs";

const TodoList = (props) => {
  const {
    children,
    error,
    loading,
    totalTodos,
    searchedTodos,
    render,
    onError,
    onLoading,
    onNotResult,
    onEmptyTodos,
    setOrderTodos,
  } = props;

  return (
    <section>
      <Container>
        {error && onError()}
        {loading && !error && onLoading()}
        {!loading && !searchedTodos.length && totalTodos
          ? onNotResult()
          : !loading && !searchedTodos.length && onEmptyTodos()}

        {!loading && !error && (
          <ReactSortable
            list={searchedTodos}
            setList={setOrderTodos}
            animation={200}
            // delayOnTouchStart={true}
            // removeCloneOnHide={true}
            swap={true}
          >
            {searchedTodos.map(render)}
          </ReactSortable>
        )}

        <ul style={{ padding: 0 }}>{children}</ul>
      </Container>
    </section>
  );
};

export default TodoList;

const Container = styled.div`
  max-width: 60rem;
  word-wrap: break-word;
  margin: 4rem auto 2rem;
`;

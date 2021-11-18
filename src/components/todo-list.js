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
          <Sortable
            list={searchedTodos}
            setList={setOrderTodos}
            animation={250}
            removeCloneOnHide={true}
            dragClass="drag"
            chosenClass= "select"
            ghostClass="gost"
          >
            {searchedTodos.map(render)}
          </Sortable>
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

const Sortable = styled(ReactSortable)`

& > .drag{
    opacity: 0;

}
& > .select{
	/* box-shadow: 0px 0px 20px rgba(149, 153, 159, .16); */
/* background-color: aliceblue;
transition: 5s; */
}



`;
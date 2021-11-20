import React,{useState} from "react";
import styled from "styled-components";
import { ReactSortable } from "react-sortablejs";
import mq from "./styles/mq";

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
    onChangeOrder
  } = props;

  const [orderTodos, setOrderTodos] = useState([]);

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
            animation={200}
            removeCloneOnHide={true}
            dragClass="drag"
            chosenClass= "select"
            ghostClass="gost"
            handle='.handle'
            onEnd={(e=> onChangeOrder(orderTodos))}

            
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
  word-wrap: break-word;
  margin: 4rem auto 2rem;

  ${mq.md}{
    margin-right: 2rem;
  }
`;

const Sortable = styled(ReactSortable)`

& > .drag{
    opacity: 0 !important;

}
& > .select{
	box-shadow: 0rem 0rem 1rem rgba(149, 153, 159, .16);
}

`;
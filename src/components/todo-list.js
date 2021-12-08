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
    compledTodos,
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
          <ContainerSection>
          Completed <span style={{ fontWeight: 900 }}>{compledTodos} </span>of{" "}
          <span style={{ fontWeight: 900  }}>{totalTodos}</span> Tasks
          </ContainerSection>
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
    margin-right: 5rem;
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

const ContainerSection = styled.div`
  /* display: grid; */
  /* grid-template-columns:10fr; */
  /* grid-template-areas: "a b c";
  word-wrap: anywhere;

  /* "a a b"
    "c d d"; */
    color: white;

  align-items: center;
  padding: 0 2rem;
  word-wrap: anywhere;
  /* background-color: #dc2060; */
  /* color: white; */
  font-size: 1.5rem;
  padding: 1rem 0;
  background-color: #9c27b0;
  text-align: center;

`;
import React,{useContext} from "react";
import styled from "styled-components";
import { colors } from "./styles/colors";
import mq from "./styles/mq";
import { TodoContext } from "../TodoContext";
import { h5 } from "./styles/tipography";

const TodoCounter = () => {

  const { totalTodos, compledTodos } = useContext(TodoContext);
  return (
    <section>
      <Container color={colors.text_color} bgColor={colors.primary.base}>
        <Title>{`You Have Completed  ${compledTodos} of ${totalTodos} Tasks`}</Title>
      </Container>
    </section>
  );
};

export default TodoCounter;

const Container = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 0 0.25rem 0.8125rem rgba(0, 0, 0, 0.3);
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  width: 90%;
  margin: 0 auto;
  ${mq.md} {
    width: 100%;
  }
`;

const Title = styled.h2`
  ${h5}
`;



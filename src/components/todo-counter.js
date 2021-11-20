import React from "react";
import styled from "styled-components";
import { colors } from "./styles/colors";
import mq from "./styles/mq";
import { h5 } from "./styles/tipography";

const TodoCounter = ({ totalTodos, compledTodos }) => {
  return (
    <section>
      <Container color={colors.text.dark} bgColor={colors.primary.base}>
        <Title>
          Completed <span style={{ color: "#59b842" }}>{compledTodos} </span>of{" "}
          <span style={{ color: "#59b842" }}>{totalTodos}</span> Tasks
        </Title>
      </Container>
    </section>
  );
};

export default TodoCounter;

const Container = styled.div`
  color: ${(props) => props.color};
  width: 100%;
  border-radius: 1rem;
  ${mq.lg} {
  }
`;

const Title = styled.h2`
  ${h5}
`;

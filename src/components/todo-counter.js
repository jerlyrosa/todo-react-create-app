import React from "react";
import styled from "styled-components";
import { colors } from "./styles/colors";
import mq from "./styles/mq";
import { h5 } from "./styles/tipography";

const TodoCounter = ({totalTodos,compledTodos}) => {

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
  margin: 5rem auto 0;
  border-radius: 1rem;
  ${mq.lg} {
    width: 46%;
  }
`;

const Title = styled.h2`
  ${h5}
`;



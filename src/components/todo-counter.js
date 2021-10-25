import React from "react";
import styled from "styled-components";
import { colors } from "./styles/colors";

const TodoCounter =()=>{
    return (
      <section>
        <Container  color={colors.text_color} bgColor={colors.primary.base}>
          <h1>Has completado 2 de 3 Todos</h1>
        </Container>
      </section>
    );
}

export default TodoCounter;

const Container = styled.div`
    display: flex; 
    justify-content: center;
    box-shadow: 0 0.25rem 0.8125rem rgba(0,0,0,0.3);
    color: ${props => props.color};
    background-color: ${props => props.bgColor};
`;
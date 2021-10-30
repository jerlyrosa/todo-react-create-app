import React from "react";
import styled from "styled-components";
import { IconTaks } from "./icons/icons";
import { colors } from "./styles/colors";

const Header = () => {
  return (
    <section>
      <Container color={colors.text_color} bgColor={colors.primary.base}>
        <h1>Todo List</h1>
        <StylesIconTasks>
          <IconTaks />
        </StylesIconTasks>
      </Container>
    </section>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 0 0.25rem 0.8125rem rgba(0, 0, 0, 0.3);
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
`;

const StylesIconTasks = styled.div`
  display: flex;
  align-items: center;
`;
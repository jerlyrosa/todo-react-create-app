import React from "react";
import styled from "styled-components";
import { colors } from "./styles/colors";
import { h6 } from "./styles/tipography";

const TodoViewUI = ({ ...props }) => {
  const { title = "Add Title", content = '"Add description"' } = props;

  return (
    <Container color={colors.text.base}>
      <Title color={colors.text.dark}>{title}</Title>
      <Content>{content} </Content>
    </Container>
  );
};

export default TodoViewUI;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0em 1rem;
  color: ${props => props.color};
`;

const Title = styled.h2`
  color: ${props => props.color};
  text-transform: capitalize;
  margin-left: 0;
  margin-top: 0;
`;

const Content = styled.p`
  margin: 0;
  ${h6}
`;

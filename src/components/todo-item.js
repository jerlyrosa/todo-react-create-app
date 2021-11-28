import React from "react";
import styled, { css } from "styled-components";
import { useModal } from "../hooks/useModal";
import Checkbox from "./checkbox";
import {
  IconEdit,
  IconTrash,
  ArrowsDiagonal,
  IconGripVertical,
} from "./icons/icons";
import { colors } from "./styles/colors";
import mq from "./styles/mq";
import { h6 } from "./styles/tipography";
import TodoViewUI from "./todo-view";

const TodoItem = (props) => {
  const { title, content, completed, creation_date, onCompled, onDelete } =
    props;

  const { ModalView, openModal } = useModal();

  const onEdit = () => alert("It is working");

  return (
    <li>
      <Container>
        <IconContainer className="handle">
          <IconGripVertical />
        </IconContainer>
        <ContainerCol>
          <StylesList
            color={colors.text.base}
            className="handle"
            checked={completed}
          >
            {title}
          </StylesList>
        </ContainerCol>
        <ModalView title={creation_date}>
          <TodoViewUI {...{ title, content }} />
        </ModalView>
        <ButtonIcon onClick={onCompled}>
          <Checkbox checked={completed} />
        </ButtonIcon>
        <ButtonIcon aria-label="tasksMaximize" onClick={openModal}>
          <ArrowsDiagonal />
        </ButtonIcon>
        <ButtonIcon aria-label="tasksEdit" onClick={onEdit}>
          <IconEdit />
        </ButtonIcon>
        <ButtonIcon aria-label="traskDelete" hover="#be0909" onClick={onDelete}>
          <IconTrash />
        </ButtonIcon>
      </Container>
    </li>
  );
};

export default TodoItem;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 10fr 3fr  3.5rem  3.5rem 3.5rem;
  align-items: center;
  padding: 0 2rem;
  word-wrap: anywhere;
  box-shadow: 0rem 0rem 0.4rem rgba(149, 153, 159, 0.16);
  background-color: white;
`;

const ContainerCol = styled.div`
  margin: 1.5rem 1rem;
  overflow: hidden;
  max-height: 2rem;
`;

const StylesList = styled.h3`
  color: ${(props) => props.color};
  display: table;
  word-break: break-all;
  cursor: pointer;
  margin: 0;
  ${h6};
  ${mq.md} {
    margin-left: 0;
  }
  font-weight: initial;
  text-decoration: ${(props) =>
    props.checked ? "line-through;" : "none"};
  font-style: ${(props) => (props.checked ? "italic" : "none")};
`;

const IconContainer = styled.div`
  cursor: move;
`;
const ButtonIcon = styled.button`
  ${({ hover }) => css`
    /* width: 2.5rem;
    height: auto; */
    background: none;
    border: none;
    box-shadow: none;
    &:hover {
      cursor: pointer;
      svg {
        transform: scale(1.1);
        stroke: ${hover && hover};
      }
    }
    ${mq.md} {
      transform: scale(1.01);
    }
  `}
`;

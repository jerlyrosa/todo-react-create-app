import React from "react";
import styled from "styled-components";
import Checkbox from "./checkbox";
import {IconTrash } from "./icons/icons";
import mq from "./styles/mq";

const TodoItem = (props) => {

  const {  text, compled,onCompled, onDelete } = props;

  return (
    <li>
      <Container>
        <div onClick={onCompled}>
           <Checkbox checked={compled}  />
          </div>
        <StylesList checked={compled}>{text}</StylesList>
        <ButtonClose onClick={onDelete}>
           <IconTrash />  
        </ButtonClose>
      </Container>
    </li>
  );
};

export default TodoItem;

const Container = styled.div`
 display: grid;
 grid-template-columns: 1fr 10fr 1fr;
 align-items: center;
 padding: 0 2rem;
`;

const ButtonClose= styled.button`
    background: none;
    border: none;
    box-shadow: none;

  &:hover{
    cursor: pointer;
      svg {
        transform: scale(1.1);
      }
  }

`;

const StylesList = styled.h6`
  ${mq.md}{
    margin-left: 0;
  }
  font-weight: initial;
  text-decoration: ${(props) => (props.checked ? "line-through;" : "none")};
  font-style: ${(props) => (props.checked ? "italic" : "none")};
`;

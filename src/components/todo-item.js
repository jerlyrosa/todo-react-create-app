import React from "react";
import styled,{css} from "styled-components";
import { useModal } from "../hooks/useModal";
import Checkbox from "./checkbox";
import {IconEdit, Iconmaximize, IconTrash } from "./icons/icons";
import { colors } from "./styles/colors";
import mq from "./styles/mq";
import { h6 } from "./styles/tipography";
import TodoViewUI from "./todo-view";


const TodoItem = (props) => {

const { title, content, completed,creation_date, onCompled, onDelete } = props;


const {ModalView, openModal} = useModal();

const onEdit =() => alert("It is working")

  return (
    <li>
      <Container>
        <div onClick={onCompled}>
           <Checkbox checked={completed}  />
          </div>
        <StylesList color={colors.text.base}  checked={completed} >{title}</StylesList>
        <ModalView title={creation_date}>
             <TodoViewUI {...{title, content}}/>
           </ModalView>
        <ButtonIcon aria-label="tasksMaximize" onClick={openModal} >
           <Iconmaximize />  
        </ButtonIcon>
        <ButtonIcon  aria-label="tasksEdit"  onClick={onEdit}>
          <IconEdit/>
        </ButtonIcon>
        <ButtonIcon aria-label="traskDelete" hover="#be0909"onClick={onDelete}>
           <IconTrash />  
        </ButtonIcon>

      </Container>
    </li>

  );
};

export default TodoItem;

const Container = styled.div`
 display: grid;
 grid-template-columns: 1fr 10fr 1fr 1fr 1fr;
 align-items: center;
 padding: 0 2rem;
 word-wrap: anywhere;

`;

const ButtonIcon= styled.button`
  ${({ hover}) => css`
  
  background: none;
    border: none;
    box-shadow: none;

  &:hover{
    cursor: pointer;
      svg {
        transform: scale(1.1);
        stroke: ${hover && hover};
      }
  }
  
  `}


`;

const StylesList = styled.h3`

  color:${props =>  props.color};
  display:table;
word-break:break-all;
  ${h6};
  ${mq.md}{
    margin-left: 0;
  }
  font-weight: initial;
  text-decoration: ${(props) => (props.checked ? "line-through;" : "none")};
  font-style: ${(props) => (props.checked ? "italic" : "none")};
`;

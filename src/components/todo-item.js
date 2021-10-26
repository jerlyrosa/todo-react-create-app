import React,{useState} from "react";
import styled from "styled-components";
import Checkbox from "./checkbox";
import { IconClose } from "./icons/icons";

const TodoItem = (props) => {

  const [checked, setChecked]  = useState( false);

  const handleClick = () => setChecked(!checked);
  
  return (
    <li>
      <Container>
        <div onClick={handleClick}>
           <Checkbox checked={checked}  />
          </div>
        <StylesList checked={checked}>{props.text}</StylesList>
        <ButtonClose>
           <IconClose/>  
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
`;

const ButtonClose= styled.button`
    background: none;
    border: none;
    box-shadow: none;

  &:hover{
    cursor: pointer;
      svg {
        transform: scale(1.4);
      }
  }

`;

const StylesList = styled.h6`
  margin-left: 0;
  font-weight: initial;
  text-decoration: ${(props) => (props.checked ? "line-through;" : "none")};
  font-style: ${(props) => (props.checked ? "italic" : "none")};
`;

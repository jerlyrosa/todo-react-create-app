import React,{useState} from "react";
import styled from "styled-components";
import Checkbox from "./checkbox";
import { IconClose } from "./icons/icons";
import mq from "./styles/mq";

const TodoItem = (props) => {

  const [checked, setChecked]  = useState( false);

  const handleClick = () => setChecked(!checked)
  
  return (
    <li>
      <Container>
        <div onClick={handleClick}>
           <Checkbox checked={checked}  />
          </div>
        <h5 style={{ marginLeft: 10 }}>{props.text}</h5>
      </Container>
      <ButtonClose>
           <IconClose/>  
        </ButtonClose>
    </li>
  );
};

export default TodoItem;

const Container = styled.div`
 display: flex;
  align-items: center;
  max-width: 95%;
  

`;

const ButtonClose= styled.button`
    position: relative;
    right: -85%;
    /* bottom: -100%; */
    background: none;
    border: none;
    box-shadow: none;

    ${mq.md}{
    transform: translateY(-175%);


    }

  &:hover{
    cursor: pointer;
      svg {
        transform: scale(1.4);
      }

  }

`;


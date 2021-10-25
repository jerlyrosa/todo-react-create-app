import React,{useState} from "react";
import styled from "styled-components";
import Checkbox from "./checkbox";

const TodoItem = (props) => {

  const [checked, setChecked]  = useState( false);

  const handleClick = () => setChecked(!checked)
  
  return (
    <li >
      <Container >
        <div onClick={handleClick}>
           <Checkbox checked={checked}  />
          </div>
        <p style={{ marginLeft: 8 }}>{props.text}</p>
        <span>X</span>
      </Container>
    </li>
  );
};

export default TodoItem;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;


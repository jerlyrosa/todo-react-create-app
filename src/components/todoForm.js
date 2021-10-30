import React, { useContext, useState } from "react";
import styled,{css} from "styled-components";
import { TodoContext } from "../TodoContext";
import { colors } from "./styles/colors";



export const TodoForm = () => {

    const  [newTodoValue, setNewTodoValue,] = useState('');

    const {
        addTodo,
        closeModal
    } = useContext(TodoContext);

    const onChange = (event) => setNewTodoValue(event.target.value);


    const onSubmit = (event) =>{
        event.preventDefault();
        if(newTodoValue.length > 0){
            addTodo(newTodoValue);
        }
        
        closeModal(false);
    }
    return (
     <Form onSubmit={onSubmit}>
         <Label>Write a new TODO</Label>
         <textarea 
         placeholder="Write a new TODO" 
         value={newTodoValue} 
         onChange={onChange} />
         <div>
             <Button 
                type="sumit"
                bgColor={colors.primary.base} 
                textColor={colors.text_cta} 
                shadowColor={"rgba(115, 185, 255, 0.5)"}
                bgHover={colors.cta_hover}
                >Add</Button>
         </div>
     </Form>
    )
}



export default TodoForm;


const Form = styled.form`
  background-color: #fff;
  padding: 0 1rem;
  display: flex;
  align-content: center;
  flex-direction: column;

`;

const Label = styled.label`
  background-color: #fff;
  display: flex;
  align-content: center;
  flex-direction: column;

`;


const Button = styled.button`

${({bgColor, textColor, shadowColor, bgHover}) => css`
    display: flex;
    margin: 0 auto;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: ${bgColor};
    font-weight: bold;
    padding: 1rem;
    border-radius: 0.8rem;
    color: white;
    outline: initial;
    border: initial;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    &:focus{
        box-shadow: 0 0 0 0.32rem ${shadowColor};
    }
    &:hover{
        color: ${textColor};
        background-color:${bgHover};
   
    }
  `}
`;


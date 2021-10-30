import React, { useContext, useState } from "react";
import styled from "styled-components";
import { TodoContext } from "../TodoContext";
import Button from "./button";


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
            addTodo(newTodoValue)
        }
        
        closeModal(false)

    }
    return (
     <Form onSubmit={onSubmit}>
         <Label>Write a new TODO</Label>
         <textarea 
         placeholder="Write a new TODO" 
         value={newTodoValue} 
         onChange={onChange} />
         <div>
             {/* <button 
             onClick={closeModal}
             >
             Cancel
             </button> */}
             <Button>
               Add
             </Button>
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
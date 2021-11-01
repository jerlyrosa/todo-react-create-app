import React, { useContext, useState } from "react";
import styled,{css} from "styled-components";
import { TodoContext } from "../TodoContext";
import { colors } from "./styles/colors";
import mq from "./styles/mq";



export const TodoForm = () => {

  const  [newValueTitle, setNewValueTitle] = useState('');
    const  [newValueContent, setNewValueContent] = useState();


    const {
        addTodo,
        closeModal
    } = useContext(TodoContext);


    const onSubmit = (event) => {
      event.preventDefault();
      if (newValueTitle.length > 0 ) {
        addTodo({ title: newValueTitle, content: newValueContent });
        closeModal(false);
      }
    };
    return (
     <Form onSubmit={onSubmit}>
         <Label>
             <Title color={colors.text.base}>Write a new TODO</Title>
             </Label>

             <TextInput
                placeholder="Write a Title" 
                value={newValueTitle}
                onChange={(e)=>setNewValueTitle(e.target.value)}
                
             />
         <TextTarea
         placeholder="Write a Description" 
         value={newValueContent} 
         onChange={(e)=>setNewValueContent(e.target.value)} />
         <div>
             <Button 
                type="sumit"
                bgColor="#6b7277"
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
  padding: 0 0 0 1rem;
  display: flex;
  align-content: center;
  flex-direction: column;
  padding: 1rem;

`;

const Label = styled.label`
  background-color: #fff;
  display: flex;
  align-content: center;
  flex-direction: column;

`;

const Title = styled.h3`
  margin: 1rem auto;
  color:${props =>  props.color};
  font-weight: 500;
`;

const TextInput = styled.input`
  font-weight: 500;
  margin: 1rem 0;
  padding: 1rem 0 1rem 2rem ;
  border-top: none;
  border-left: none;
  border-right: none;
  border-color: #eeeeee;
  border-width: thin;

`;

// border-bottom-width: thin;
// border-bottom-color


const TextTarea = styled.textarea`
  resize: vertical;
  padding: 2rem 0 0 2rem;
  border-top: none;
  border-left: none;
  border-right: none;
  font-weight: 500;
  border-bottom-color:#eeeeee;


  max-height: 50vh;

  ${mq.md} {
    resize: auto;
    max-width: 45rem;
    min-width: 45rem;
    /* border: revert; */
  }
`;

const Button = styled.button`
  ${({ bgColor, textColor, shadowColor, bgHover }) => css`
    display: flex;
    margin: 1rem auto 0;
    user-select: none;
    background-color: ${bgColor};
    font-weight: 500;
    padding: 1rem;
    border-radius: 0.8rem;
    color: white;
    border: initial;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    &:focus {
      box-shadow: 0 0 0 0.32rem ${shadowColor};
    }
    &:hover {
      color: ${textColor};
      background-color: ${bgHover};
    }
  `}
`;


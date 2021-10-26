import React from "react";
import styled,{css} from 'styled-components';
import { colors } from "./styles/colors";

const CreateTodoButton =(props)=>{

    return (
        <Button 
        bgColor={colors.primary.base} 
        textColor={colors.text_cta} 
        shadowColor={"rgba(115, 185, 255, 0.5)"}
        bgHover={colors.cta_hover}>
              Agregar Nueva
        </Button>
    )
}

export default CreateTodoButton;


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
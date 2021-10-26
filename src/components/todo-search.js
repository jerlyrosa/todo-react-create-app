import React from "react";
import styled from "styled-components";
import mq from "./styles/mq";

const TodoSearch =()=>{
    return (
        <Section>
          <Input  placeholder="Tasks"/>    
        </Section>
    )
}

export default TodoSearch;


const Section = styled.section`
`;

const Input = styled.input`
  display: flex;
  margin: 4rem auto;
  background: 0;
  border: 0;
  outline: none;
  width: 80vw;
  max-width: 400px;
  font-size: 2rem;
  transition: 0.9s ease;
  border-bottom: 1px solid  #00bcd4;
  border-bottom-width: thin;
  width: 25rem;

  &:focus { 
    ${mq.md}{
      width: 80%;
    }
  }



  
`;

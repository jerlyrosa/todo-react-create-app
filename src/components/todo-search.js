import React from "react";
import styled from "styled-components";

const TodoSearch =()=>{
    return (
        <section>
          <Input  placeholder="Tasks"/>    
        </section>
    )
}

export default TodoSearch;


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
      width: 85%;
  }  
`;

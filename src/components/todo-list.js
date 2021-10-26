import React from "react";
import styled from "styled-components";

const TodoList =(props)=>{
    return (
        <section> 
            <Container>
            <ul>
                {props.children}
            </ul>
            </Container>
        </section>
    )
}

export default TodoList;

const Container = styled.div`
    margin: 5rem auto;
`;
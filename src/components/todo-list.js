import React from "react";
import styled from "styled-components";

const TodoList =({children})=>{

    return (
        <section> 
            <Container>
            <ul style={{ padding: 0 }}> 
                {children}
            </ul>
            </Container>
        </section>
    )
}

export default TodoList;

const Container = styled.div`
    max-width: 60rem;
    word-wrap: break-word;
    margin: 4rem auto 2rem;
`;
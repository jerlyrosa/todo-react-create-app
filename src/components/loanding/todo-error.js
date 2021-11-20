import React from 'react';
import styled from 'styled-components'
import { colors } from '../styles/colors'

export const TodosError= ({error}) => {
    return (
        <div>
            <Title color={colors.text.base}>There was mistake...</Title>
        </div>
    )
}

export default TodosError;


const Title = styled.h3`
text-align: center;
color: ${props => props.color};
`;

import React from 'react';
import styled from 'styled-components'
import { colors } from '../styles/colors'

export const TodosResult= ({searchValue}) => {
    return (
        <div>
            <Title color={colors.text.base}>{`There are no tasks with the name "${searchValue}" 😐`}</Title>
        </div>
    )
}

export default TodosResult;


const Title = styled.h3`
color: ${props => props.color};
`;

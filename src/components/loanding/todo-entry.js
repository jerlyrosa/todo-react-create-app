import React from 'react'
import styled from 'styled-components'
import { colors } from '../styles/colors'

export const TodosEntry= () => {
    return (
        <div>
            <Title color={colors.text.base}>Create your first TODO!</Title>
        </div>
    )
}

export default  TodosEntry


const Title = styled.h3`
color: ${props => props.color};
`;

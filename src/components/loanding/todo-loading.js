import React from "react";
import styled from 'styled-components'
import { colors } from '../styles/colors'

export const TodosLoading = () => {
  return (
    <Loader>
        <Title color={colors.text.base}>It's loading, please wait...</Title>
    </Loader>
  );
};

export default TodosLoading;

const Title = styled.h3`
color: ${props => props.color};
`;


const Loader = styled.div`
  margin: 1rem;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: preloadAnimation;
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  display: flex;
  min-height: 50px;
  @keyframes preloadAnimation {
    0% {
      background-position: -769px 0;
    }
    100% {
      background-position: 769px 0;
    }
  }
`;

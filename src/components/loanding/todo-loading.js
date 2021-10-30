import React, { Fragment } from "react";
import styled from "styled-components";

export const TodosLoading = () => {
  return (
    <Loader>
      <h3>It's loading, please wait...</h3>
    </Loader>
  );
};

export default TodosLoading;

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

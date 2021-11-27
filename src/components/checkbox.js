import React from "react";
import styled from "styled-components";
import { colors } from "./styles/colors";
import mq from "./styles/mq";

const Checkbox = ({ className, checked }) => (
  <CheckboxContainer
    className={className}
    color={checked ? colors.secondary.light : "#b8b9b8"}
  >
    <StyledCheckbox
      checked={checked}
      color={checked ? colors.secondary.light : "#abafac"}
    >
      <span checked={checked}>Completed</span>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

export default Checkbox;

const CheckboxContainer = styled.div`
  display: inline-flex;
  vertical-align: middle;

  ${mq.md} {
    cursor: pointer;
    ${mq.md} {
      width: 20rem;
      height: 4rem;
      background: ${(props) => props.color};
      align-items: center;
      justify-content: center;
      color: #fff;
      font-family: "Roboto", sans-serif;
      font-size: 15px;
      font-weight: 500;
      border: none;
      cursor: pointer;
      text-transform: uppercase;
      transition: 0.3s ease all;
      position: relative;
      overflow: hidden;
    }
  }
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${(props) => props.color};
  border-radius: 3px;
  transition: all 150ms;

  ${mq.md} {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }

  & > Icon {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }

  & > span {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};

    position: relative;
    z-index: 2;
    /* transition: .3s ease all; */
    display: table-column;
    top: 1.2rem;
    ${mq.md} {
      display: initial;
    }
  }
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
  ${mq.md} {
    display: none;
  }
`;

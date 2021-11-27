import React from "react";
import styled from "styled-components";
import { IconTaks, IconUserCircle } from "./icons/icons";
import { colors } from "./styles/colors";
import mq from "./styles/mq";


const Header = ({userName}) => {


  return (
    <section>
      <Container color={colors.text_color} bgColor={colors.primary.base}>
        <Name>
        <Title>Things to do</Title>
        <StylesIconTasks>
          <IconTaks />
        </StylesIconTasks>
        </Name>
        <User>
          <IconUserCircle/>
        <span>{`${userName.name} `}</span>
        </User>
      </Container>
    </section>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 0 0.25rem 0.8125rem rgba(0, 0, 0, 0.3);
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};

  ${mq.md}{
    justify-content:space-between;
  }
`;

const Name = styled.div`
  display: flex;
`;

const Title = styled.h2`

`;
const StylesIconTasks = styled.div`
  display: flex;
  align-items: center;
`;

const User = styled.div`
  display: none;
  ${mq.md}{
    display: flex;
    font-size: 1.5rem;
    align-items: center;
    margin-right: 10rem;
    /* display: initial; */
  }
`
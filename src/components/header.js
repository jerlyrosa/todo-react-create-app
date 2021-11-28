import React from "react";
import styled from "styled-components";
import { IconTaks, IconUserCircle } from "./icons/icons";
import { colors } from "./styles/colors";
import mq from "./styles/mq";


const Header = ({userName, setOpenEditName}) => {

  return (
    <section>
      <Container color={colors.text_color} bgColor={colors.primary.base}>
        <Name>
        <Title>Things to do</Title>
        <StylesIconTasks>
          <IconTaks />
        </StylesIconTasks>
        </Name>
        <User onClick={()=> setOpenEditName(true)}>
          <IconUserCircle/>
        <span>{userName != null && userName.name}</span>
        </User>
      </Container>
    </section>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  /* justify-content: center; */
  box-shadow: 0 0.25rem 0.8125rem rgba(0, 0, 0, 0.3);
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};

  justify-content:space-between;
  ${mq.md}{
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
  max-width: 3rem;
  ${mq.md}{
    max-width: 4rem;
  }
`;

const User = styled.div`
  display: flex;
  font-size: 1.5rem;
  align-items: center;
  margin-right: 2rem;
  cursor: pointer;
  ${mq.md}{
    margin-right: 10rem;
  }

  &> span{
    display: none;
    ${mq.md}{
    display: initial; 
  }
  }
`
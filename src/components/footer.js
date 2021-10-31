import React from "react";
import styled from "styled-components";
import {
  IconGithub,
  IconInstagram,
  IconLinkedin,
  IconTwitter,
} from "./icons/icons";
import { colors } from "./styles/colors";

const FooterUI = () => {
  return (
    <footer>
      <Container bgColor={colors.primary.base}>
        <SocialBox>
          <span>
            <a href="https://www.instagram.com/jerly_hdt/?hl=es"
             aria-label="instagram"
            >
              <IconInstagram />
            </a>
          </span>
          <span>
            <a href="https://github.com/sr-jerly"
             aria-label="github">
              <IconGithub />
            </a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/jerlydelarosa/"
            aria-label="linkedin">
              <IconLinkedin />
            </a>
          </span>
          <span>
            <a href="https://twitter.com/sr_jerly"
           
           aria-label="twitter">
              <IconTwitter />
            </a>
          </span>
        </SocialBox>
        <Line />
        <p>
          &copy; Copyright 2021{" "}
          <a href="https://www.linkedin.com/in/jerlydelarosa/">
            &copy; Jerly De La Rosa
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default FooterUI;

const Container = styled.div`
  background-color: ${(props) => props.bgColor};
  color: white;
  padding: 2rem 1rem;
`;

const SocialBox = styled.span`
  max-height: 8rem;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Line = styled.hr`
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(255, 255, 255, 0.75),
    rgba(0, 0, 0, 0)
  );
`;

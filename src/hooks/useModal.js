import React, { useState } from "react";
import { createPortal } from "react-dom";
import styled, { css } from "styled-components";
import { IconClose } from "../components/icons/icons";
import mq from "../components/styles/mq";
import { Global } from "@emotion/react";

const useModal = () => {
  const [isModal, setCloseModal] = useState(false);

  const closeModal = () => {
    setCloseModal(false);
  };
  const openModal = () => {
    setCloseModal(!isModal);
  };

  const editModal = () => {
    setCloseModal(!isModal);
  };

  const ModalView = ({ title, children }) => {
    return createPortal(
      <Container modal={isModal}>

        {isModal && <Global styles={{ body: { overflowY: "hidden" } }} />}

        <Card>
          <CloseBottom onClick={closeModal}>
            <IconClose />
          </CloseBottom>
          {children}
          {title && <Span>{`Create: ${title}`}</Span>}
        </Card>
      </Container>,
      document.getElementById("modal")
    );
  };
  return {
    ModalView,
    openModal,
    closeModal,
    editModal,
  };
};

export { useModal };

const Container = styled.div`
  overflow-y: hidden;

  ${({ modal }) => css`
    background: rgba(0, 0, 0, 0.7);
    display: ${modal ? "flex" : "none"};
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    align-items: baseline;
    justify-content: center;
  `}
`;

const Card = styled.div`
  background: #fff;
  margin: 5rem 1rem;
  border-radius: 5px;
  max-width: 65rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  min-width: 85vw;
  word-wrap: break-word;
  ${mq.md} {
    min-width: 40rem;
    margin: 10rem 1rem;
  }
`;

const CloseBottom = styled.button`
  max-height: 4rem;
  background: none;
  border: none;
  box-shadow: none;
  display: flex;
  justify-content: end !important;

  &:hover {
    cursor: pointer;
    svg {
      transform: scale(1.4);
    }
  }
`;

const Span = styled.span`
  margin-top: 1rem;
`;

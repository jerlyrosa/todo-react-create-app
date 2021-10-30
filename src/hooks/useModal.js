import React, { useState } from 'react';
import {createPortal} from 'react-dom';
import styled,{css} from 'styled-components';
import { IconClose } from '../components/icons/icons';



const useModal = () => {

const [isModal, setCloseModal] = useState(false);

const closeModal = () => {
    setCloseModal(false);
  };
  const openModal = () => {
    setCloseModal(true);
  };





const  ModalView = ({children}) =>{

    return createPortal(
        <Container modal={isModal} onClick={closeModal}>
            <Card onClick={(e) => e.stopPropagation()}>
              {children}
                  <CloseBottom onClick={closeModal}>
                  <IconClose/>
              </CloseBottom>
            </Card>
        </Container>,
        document.getElementById('modal')
    )


}
return{
    ModalView,
    openModal,
    closeModal
}

}


export {useModal}

const Container = styled.div`
  ${({ modal }) => css`

background: rgba(0, 0, 0, 0.5);
display: ${modal ? 'flex':'none'};
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
  margin: 20rem 1rem;
  border-radius: 5px;
  max-width: 40rem;
  padding: 1rem;
  display: grid;
 grid-template-columns: 11fr 1fr;
 grid-template-rows: 1fr;


  word-wrap: break-word;
`;

const CloseBottom = styled.button`
    position: relative;
    top: -40%;
    background: none;
    border: none;
    box-shadow: none;



  &:hover{
    cursor: pointer;
      svg {
        transform: scale(1.4);
      }
  }
`;
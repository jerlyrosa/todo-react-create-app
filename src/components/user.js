import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useModal } from "../hooks/useModal";
import { colors } from "./styles/colors";

 const UserForm = ({closeModal}) => {
     
    const [user, setUser] = useState([]);

    const getUser = (data) => {
        return localStorage.setItem("UserName", JSON.stringify(data));
    };
    
    const onSubmit = (event) => {
        event.preventDefault();
        if (user.length > 0) {
            getUser({ user:{
            name: user
            }});
            closeModal(false);
        }
    };
    
  return (
      <Form onSubmit={onSubmit}>
        <Label>
          <Title color={colors.text.base}>Write your Name</Title>
        </Label>
        <TextInput
          placeholder="Write a Name"
          value={user}
          onChange={(e)=>setUser(e.target.value)}
          maxLength={20}
        />
        
        <Button
          type="sumit"
          bgColor="#6b7277"
          textColor={colors.text_cta}
          shadowColor={"rgba(115, 185, 255, 0.5)"}
          bgHover={colors.cta_hover}
        >
          Add
        </Button>
      </Form>
  );
};

const  UserData =()=>{
    const { ModalView, openModal, closeModal } = useModal();
    useEffect(() => {
        if (localStorage.getItem("UserName") === null) {
            openModal();
        }
    }, []);

return(
    <ModalView>
        <UserForm closeModal={closeModal}/>
    </ModalView>
)

};

export default  UserData;


const Form = styled.form`
  background-color: #fff;
  padding: 0 0 0 1rem;
  display: flex;
  align-content: center;
  flex-direction: column;
  padding: 1rem;
`;

const Label = styled.label`
  background-color: #fff;
  display: flex;
  align-content: center;
  flex-direction: column;
`;

const Title = styled.h3`
  margin: 1rem auto;
  color: ${(props) => props.color};
  font-weight: 500;
`;

const TextInput = styled.input`
  font-weight: 500;
  margin: 1rem 0;
  padding: 1rem 0 1rem 2rem;
  border-top: none;
  border-left: none;
  border-right: none;
  border-color: #eeeeee;
  border-width: thin;
`;

const Button = styled.button`
  ${({ bgColor, textColor, shadowColor, bgHover }) => css`
    display: flex;
    margin: 1rem auto 0;
    user-select: none;
    background-color: ${bgColor};
    font-weight: 500;
    padding: 1rem;
    border-radius: 0.8rem;
    color: white;
    border: initial;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    &:focus {
      box-shadow: 0 0 0 0.32rem ${shadowColor};
    }
    &:hover {
      color: ${textColor};
      background-color: ${bgHover};
    }
  `}
`;




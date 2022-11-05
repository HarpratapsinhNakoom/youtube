import React from 'react'
import styled from 'styled-components'
import {AiOutlineSend}from 'react-icons/ai'

const Container = styled.div`
    margin-top: 50px;
    background-color: var(--light-skin);
    padding: 80px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    text-align: center;
    color: var(--dark-green);
    font-size: 50px;
    margin-bottom: 5px;
    @media only screen and (max-width : 320px) {
        font-size: 30px;
    }
`
const Description = styled.div`
    letter-spacing: 1.7px;
    font-size: 20px;
    word-spacing: 2px;
    text-align: center;
    opacity: 60%;
    margin-bottom: 45px;
`
const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
`
const Input = styled.input`
    padding: 10px;
    font-size: 15px;
    flex:8;
    border:none;
    font-weight: 500;
    letter-spacing: 1px;

    &:focus {
        outline: none;
    }
`
const Button = styled.button`
    cursor: pointer;
    color: var(--white);
    padding: 10px;
    font-size: 15px;
    border: none;
    background-color: var(--light-green);
    flex:1;

    &:hover{
        background-color: var(--dark-green);
        opacity: 60%;
    }
`
const Newsletter = () => {
  return (
    <Container>
        <Title>NEWSLETTER</Title>
        <Description>
            Get timely updates about your favourite anime merch and categories.
        </Description>

        <InputContainer>
            <Input type="email" name='email' placeholder='Enter your email'/>
            <Button>
                <AiOutlineSend />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter
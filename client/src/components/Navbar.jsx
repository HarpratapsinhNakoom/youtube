import React from 'react'
import styled from 'styled-components'
import { mobile , tablet } from '../responsive'
import {BsSearch, BsCartCheck} from 'react-icons/bs'

const Container = styled.div`
    /* height: 60px; */
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

    ${tablet({
        display:"none"
    })}
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    color: var(--dark-green);
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    background-color: white;
`

const Input = styled.input`
    border: none;
    :focus {
        border: none;
        outline: none;
    }
`
const Center = styled.div`
    text-align: center;
    flex: 1;
`

const Logo = styled.h1`
    font-weight: bold;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const MenuLinks = styled.div`
    font-size: 16px;
    cursor: pointer;
    margin-left: 25px;
    color: var(--dark-green);

    :hover {
        text-decoration: underline;
    }
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <BsSearch style={{color : 'gray', fontSize : '16px'}} />
                </SearchContainer>
            </Left>
            <Center>
                <Logo>KIYOPON</Logo>
            </Center>
            <Right>
                <MenuLinks>Sign up</MenuLinks>
                <MenuLinks>Log in</MenuLinks>
                <MenuLinks><BsCartCheck /></MenuLinks>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
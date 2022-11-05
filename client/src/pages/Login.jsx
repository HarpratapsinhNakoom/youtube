import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('https://i.pinimg.com/736x/4d/4f/32/4d4f328ea4fdc2e19ed979b1ff28d576.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
    width: 100vw;
`

const LoginContainer = styled.div`
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction : column;
    padding :20px;
    border-radius: 15px;
    background-color: whitesmoke;
    -webkit-box-shadow: 1px 1px 5px 0.1px var(--light-green);
    -moz-box-shadow: 1px 1px 5px 0.1px var(--light-green);
    box-shadow: 1px 1px 5px 0.1px var(--light-green);
`

const Heading = styled.span`
    color : var(--light-green);
    margin: 15px 0;
    letter-spacing: 1.4px;
    font-size: 30px;
    font-weight: 600;
`
const SmallHeading = styled.span`
    margin-bottom: 35px;
    a{
        color: black;
    }
`

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
`
const InputContainer = styled.div`
    position: relative;
`
const Label = styled.label`
    position: absolute;
    top:0px;
    left: 20px;
    color: var(--dark-green);
    font-weight: 500;
    letter-spacing: 1px;
    background-color: none;
`
const Email = styled.input`
    width: 60%;
    margin: 10px;
    padding:  10px;
    font-size: 16px;
    border-radius: 12px;
    border: none;
    letter-spacing: 0.8px;

    @media (max-width : 550px) {
        width: 75%;
    }
    @media (max-width : 410px) {
        width: 90%;
    }
`
const Password = styled.input`
    width: 60%;
    margin: 10px;
    padding:  10px;
    font-size: 16px;
    border-radius: 12px;
    border: none;
    letter-spacing: 0.8px;
    @media (max-width : 550px) {
        width: 75%;
    }
    @media (max-width : 410px) {
        width: 90%;
    }
`
const LoginBtn = styled.button`
    width: max-content;
    margin: 10px;
    padding: 10px 20px;
    font-size: 20px;
    border-radius: 12px;
    border: none;
    letter-spacing: 0.8px;
    background-color: var(--dark-green);
    color: var(--white);
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
        transform: scale(1.04);
    }
`
const Login = () => {
  return (
    <Container>
        {/* <Image src={bgImage}/> */}
        <LoginContainer>
            <Wrapper>
                <Heading>
                    Welcome Back
                </Heading>
                <SmallHeading>
                    Don't have an account? <a href='/'>Create now</a>
                </SmallHeading>

                <FormContainer>
                    <InputContainer>
                        <Label htmlFor='email'>Email</Label>
                        <Email type='email' name='email'/>
                    </InputContainer>
                    <InputContainer>
                        <Label htmlFor='password'>Password</Label>
                        <Password type='password' name='password'/>
                    </InputContainer>
                    
                    <LoginBtn>Log in</LoginBtn>

                </FormContainer>
            </Wrapper>

        </LoginContainer>
    </Container>
  )
}

export default Login
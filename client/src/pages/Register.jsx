import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('https://media.istockphoto.com/vectors/liquid-style-colorful-pastel-abstract-background-with-elements-vector-vector-id1322944034?b=1&k=20&m=1322944034&s=612x612&w=0&h=UmqIEt0hsB-TsDeAfcY4moSG16_9SHKGtSfyrb0Ux-E=');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

const RegisterContainer = styled.div`
    width: 80%;
    max-width: 600px;
    display: flex;
    flex-direction : column;
    padding :20px;
    margin: 60px 10px;
    border-radius: 15px;
    background-color: whitesmoke;
    -webkit-box-shadow: 1px 1px 5px 1px var(--light-green);
    -moz-box-shadow: 1px 1px 5px 1px var(--light-green);
    box-shadow: 1px 1px 5px 1px var(--light-green);
`

const Heading = styled.span`
    color : var(--light-green);
    margin: 15px 0;
    letter-spacing: 1.4px;
    font-size: 30px;
    font-weight: 600;
`
const SubHeading = styled.span`
    font-weight: 700;
    font-size: 40px;
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
    /* display: flex;
    flex-wrap: wrap; */
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
const NameItem = styled.input`
    min-width: 160px;
    flex: 1;
    margin: 10px;
    padding: 10px;
    font-size: 20px;
    border-radius: 12px;
    border: none;
    font-weight: bold;
    letter-spacing: 0.8px;

    @media (max-width : 740px) {
        margin: 10px 0;
    }
`
const Dob = styled.input`
    width: 160px;
    margin: 10px;
    padding:  10px;
    font-size: 16px;
    border-radius: 12px;
    border: none;
    letter-spacing: 0.8px;
`
const Email = styled.input`
    width: 60%;
    margin: 10px;
    padding:  10px;
    font-size: 16px;
    border-radius: 12px;
    border: none;
    letter-spacing: 0.8px;
`
const Password = styled.input`
    width: 60%;
    margin: 10px;
    padding:  10px;
    font-size: 16px;
    border-radius: 12px;
    border: none;
    letter-spacing: 0.8px;
`
const CreateBtn = styled.button`
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
const Register = () => {
  return (
    <Container>
        <RegisterContainer>
            <Heading>
                Kiyopon welcomes you
            </Heading>
            <SubHeading>
                Create new account.
            </SubHeading>
            <SmallHeading>
                Already have an account? <a href='/'>Log in</a>
            </SmallHeading>

            <FormContainer>
                <div style={{
                    display : 'flex',
                    justifyContent:'space-between',
                    alignItems : 'center',
                    flexWrap : 'wrap'}}>
                    <InputContainer>
                        <Label htmlFor='firstName'>First Name</Label>
                        <NameItem name='firstName' type='text'/>
                    </InputContainer>
                    <InputContainer>
                        <Label htmlFor='lastName'>Last Name</Label>
                        <NameItem name='lastName' type='text'/>
                    </InputContainer>
                </div>
                <InputContainer>
                    <Label htmlFor='dob'>Date of Birth</Label>
                    <Dob type='date' name='dob'/>
                </InputContainer>
                <InputContainer>
                    <Label htmlFor='email'>Email</Label>
                    <Email type='email' name='email'/>
                </InputContainer>
                <InputContainer>
                    <Label htmlFor='password'>Password</Label>
                    <Password type='password' name='password'/>
                </InputContainer>
                
                <CreateBtn>Create Account</CreateBtn>

            </FormContainer>

        </RegisterContainer>
    </Container>
  )
}

export default Register
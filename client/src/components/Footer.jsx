import React from 'react'
import styled from 'styled-components'
import {BsInstagram, BsTwitter, BsPinterest, BsLinkedin, BsTelephone} from 'react-icons/bs'
import { footerLinksData } from '../data/homeData'
import {GrLocation} from 'react-icons/gr'
import {AiOutlineMail} from 'react-icons/ai'
import { tablet } from '../responsive'

const Container = styled.div`
    display: flex;
    padding: 50px 15px;
    align-items: flex-start;
    ${tablet({
        flexDirection : "column"
    })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
`

const Logo = styled.div`
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 10px;
`
const Desc = styled.div`
    opacity: 80%;
    letter-spacing: 0.8px;
`

const SocialContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const SocialItem = styled.div`
    font-size: 25px ;
    margin: 40px 15px 0 15px;
    background-color: #${props=>props.bgColor};
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    border-radius: 10px;
    cursor: pointer;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.div`
    font-size: 20px;
    font-weight: 400;
    color : var(--dark-skin);
`
const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: column; */
    padding: 10px;
`
const ListItem = styled.div`
    width: 50%;
`

const ListItemText = styled.div`
    width: fit-content;
    margin: 10px 0;
    font-weight: 300;
    letter-spacing: 0.8px;
    opacity: 0.6;
    cursor: pointer;
    &:hover {
        opacity: 1;
        text-decoration: underline;
    }
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`
const PaymentImage = styled.img`
    margin-top: 15px;
    width: 80%;
`
const LastSection = styled.div`
    margin: auto 0;
    text-align: center;
    font-size: 20px;
    color: var(--white);
    padding: 15px;
    background-color: var(--dark-green);
`
const Footer = () => {
    const showFooterLinks = footerLinksData.map((link, index) => {
        return (
            <ListItem key={index}>
                <ListItemText>{link.name}</ListItemText>
            </ListItem>
        );
    })
  return (
    <>
        <Container>
            <Left>
                <Logo>KIYOPON</Logo>
                <Desc>
                    One-stop to finding Anime clothings ranging from caps and accesories to tees, hoodies and cosplay fashion, we have it all. Get countless choices and experience easy shopping. Grab early access to offers and limited collections.
                </Desc>
                <SocialContainer>
                    <SocialItem bgColor="0A66C2"><BsLinkedin /></SocialItem>
                    <SocialItem bgColor="E1306C"><BsInstagram /></SocialItem>
                    <SocialItem bgColor="E60023"><BsPinterest /></SocialItem>
                    <SocialItem bgColor="1DA1F2"><BsTwitter /></SocialItem>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    {showFooterLinks}
                </List>
            </Center>
            <Right>
                <Title>Contact Us</Title>
                <ListItemText>
                            <GrLocation />&nbsp; 1, CityLight Society,
                            Parle Point,<br/>
                            Surat,
                            Gujarat,<br/>
                            India.395007</ListItemText>
                <ListItemText><BsTelephone />&nbsp; +91 966-2013-668</ListItemText>
                <ListItemText><AiOutlineMail />&nbsp; harpratapnakoom@gmail.com</ListItemText>
                <PaymentImage src='https://jerseykobebryant.com/wp-content/uploads/2020/06/Logos-01.png'/>
            </Right>
        </Container>
        <LastSection>Made with 💜 by <u>Harpratapsinh Nakoom</u></LastSection>
    </>
  )
}

export default Footer
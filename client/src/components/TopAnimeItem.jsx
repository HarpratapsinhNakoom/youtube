import React from 'react'
import styled from 'styled-components'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Container = styled.div`
    transition: all 0.5s ease;
    min-width: 280px;
    max-width: 350px;
    margin: 25px 0;
    margin: 10px;
    border-radius: 4px;
    border: 0.5px solid var(--light-green);

    &:hover {
      -webkit-box-shadow: 0px 0px 15px 0px var(--light-green);
      -moz-box-shadow: 0px 0px 15px 0px var(--light-green);
      box-shadow: 0px 0px 15px 0px var(--light-green);
    }
`
const Image = styled.img`
    width: 100%;
    border-radius: inherit;
    cursor: pointer;
`

const Info = styled.div`
    margin: 10px;
`
const AnimeName = styled.h2`
    letter-spacing: 1.5px;
    word-spacing: 4px;
    color: var(--dark-green);
    margin: 10px 0;
`
const Button = styled.div`
    display: flex;
    align-items: center;
`

const BtnText = styled.span`
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`
const TopAnimeItem = (props) => {
  return (
        <Container>
            <Image src={props.anime.imgLink} pos={props.pos}/>
            <Info>
                <AnimeName>{props.anime.name}</AnimeName>
                <Button>
                    <BtnText>Shop Now</BtnText>
                <AiOutlineArrowRight /> </Button>
            </Info>
        </Container>
  )
}

export default TopAnimeItem
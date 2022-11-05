import React from 'react'
import styled from 'styled-components'
import { topAnimeData } from '../data/homeData'
import TopAnimeItem from './TopAnimeItem';

const Container = styled.div`
    padding: 40px 0;
`;

const Line = styled.div`
    height: 1px;
    width: 100%;
    background-color: var(--dark-green);
    flex: 2;
`
const ContainerHeading = styled.h1`
    flex: 1;
    text-align: center;
    color: var(--dark-green);
    font-size: 40px;
    letter-spacing: 4px;
    word-spacing: 10px;
    margin-bottom: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-evenly;
    /* width: 100%; */
    padding: 0 40px;
`
const TopAnime = () => {
    const showTopAnime = topAnimeData.map((anime, index) =>{
        return(
            <TopAnimeItem anime = {anime}
                        key={index}
                        pos={index%2 === 0 ? 'left' : 'right'}/>
        );
    })
  return (
    <Container>
        <ContainerHeading>
            <Line />
                DISCOVER FROM TRENDING ANIMES
            <Line />
        </ContainerHeading>
        <Wrapper>
            {showTopAnime}
        </Wrapper>
    </Container>
  )
}

export default TopAnime
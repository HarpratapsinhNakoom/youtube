import React from 'react'
import styled from 'styled-components'
import {consData} from '../data/homeData'

const Container = styled.div`
    padding: 70px 0;
    width: 100%;
`
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
`
const ConItem = styled.div`
    width: 150px;
    text-align: center;
`;

const ConImage = styled.img`
    width: 50%;
`

const ConName = styled.h3`

`
const Cons = () => {
    const showCons = consData.map((con, index) => {
        return (
            <ConItem key={index}>
                <ConImage src={con.conImg}/>
                <ConName>{con.con}</ConName>
            </ConItem>
        );
    });
  return (
    <Container>
        <Wrapper>
            {showCons}
        </Wrapper>
    </Container>
  )
}

export default Cons
import React from 'react'
import styled from 'styled-components'
import Products from './Products';
const Container = styled.div`
    padding: 40px;
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


const HomeProducts = () => {

  return (
    <Container>
        <ContainerHeading>
            <Line />
                HOT SELLERS
            <Line />
        </ContainerHeading>
        <Products />
    </Container>
  )
}

export default HomeProducts
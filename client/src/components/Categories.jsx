import React from 'react'
import styled from 'styled-components'
import { categoryData } from '../data/homeData'
import { tablet } from '../responsive'
import CategoryItem from './CategoryItem'

const Container = styled.div`
    margin-top: 80px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 25px;

    ${tablet(
        {
            padding : "0"
        }
    )}
`

const Categories = () => {
    const showCategoreis = categoryData.map((item, index) => {
        return(
            <CategoryItem key={index} item={item}/>
        );
    })
  return (
    <Container>
        {showCategoreis}
    </Container>
  )
}

export default Categories
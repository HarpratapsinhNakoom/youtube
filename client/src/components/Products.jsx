import React from 'react'
import styled from 'styled-components'
import { popularProductsData } from '../data/homeData'
import ProductItem from './ProductItem';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    /* display: grid;
    grid-template-columns: repeat(5,1fr); */
    margin: 8px;
`

const Products = () => {
    const showPopularProducts = popularProductsData.map((product, index) => {
        return (
            <ProductItem product = {product} key={index}/>
        );
    })
  return (
    <Wrapper>
        {showPopularProducts}
    </Wrapper>
  )
}

export default Products
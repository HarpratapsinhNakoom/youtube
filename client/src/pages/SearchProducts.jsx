import React from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { mobile } from '../responsive';

const Container = styled.div`
    /* padding: 20px; */
`
const Title = styled.div`
    margin: 20px;
    font-size: 45px;
    font-weight: 550;
    color: var(--light-green);
`
 
const SubTitle = styled.div`
    margin: 20px;
    letter-spacing: 1px;
    word-spacing: 1.4px;
    margin-bottom: 30px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile(
        {
            flexDirection : "column"
        }
    )}
`
const Filter = styled.div`
    margin: 20px;
    @media only screen and (max-width: 935px ) {
        margin: 10px;
    }
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
`

const Select = styled.select`
    font-size: 20px;
    margin: 10px 20px;
    border-radius: 20px;
    padding: 10px 20px;
    border: 2.5px solid var(--dark-green);
    @media only screen and (max-width: 935px ) {
        font-size: 15px;
        margin: 10px 15px;
        padding: 10px ;
    }
`
const Option = styled.option`
    font-weight: 500;
`

const Heading = styled.p`
    font-weight: 300;
    margin: 20px;
    font-size: 35px;
    color: var(--dark-skin);
`
const ProductList = () => {
  return (
    <>
        <Navbar />
        <Container>
            <Title>Hoodies</Title>
            <SubTitle>Showing 25 results for Hoodies</SubTitle>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products</FilterText><br />
                    <Select>
                        <Option disabled>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Blue</Option>
                        <Option>Green</Option>
                        <Option>Red</Option>
                    </Select>
                    <Select>
                        <Option disabled>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products</FilterText><br />
                    <Select defaultValue='Relevancy'>
                        <Option>Relevancy</Option>
                        <Option>Lowest Price</Option>
                        <Option>Highest Price</Option>
                        <Option>Top Customer Reviews</Option>
                        <Option>Most Recent</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Heading>Find something you love</Heading>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    </>
  )
}

export default ProductList
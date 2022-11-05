import React from 'react'
import styled from 'styled-components'
import {BsCartPlus, BsHeart, BsSearch} from 'react-icons/bs'

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left : 0;
    z-index: 20;
    background-color: rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
    border-radius:10px;
`

const Image = styled.img`
    height: 250px;
    width: 250px;
    object-fit: cover;
    z-index: 10;
    border-radius: 10px;
`
const ImageContainer = styled.div`
    flex: 1 0 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    &:hover ${Info}{
        opacity: 1;
    }

    &:hover ${Image} {
        -webkit-box-shadow: 0px 0px 10px 1px var(--light-green);
        -moz-box-shadow: 0px 0px 10px 1px var(--light-green);
        box-shadow: 0px 0px 10px 1px var(--light-green);
    }
`
const Container = styled.div`
    flex: 1;
    margin: 30px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`


const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: whitesmoke;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 10px;
    border: none;
    transition: all 0.3s ease ;

    &:hover {
        transform: scale(1.1);
        background-color: var(--white);
    }
`

const ProductInfo = styled.div`
    padding: 12px 8px;
    align-self: flex-start;
`
const ProductName = styled.div`
    font-size: 26px;
    color: var(--dark-green);
    letter-spacing: 1.3px;
`
const ProductRating = styled.div`
    font-weight: 900;
    font-size: 17px;
    margin: 8px 0;
`
const ProductPrice = styled.div`
    font-weight: 400;
    letter-spacing: 0.8px;
    font-weight: 700;
    margin-bottom: 12px;
`
const ProductMaker = styled.div`
    letter-spacing: 1px;
`

const ProductItem = (props) => {
  return (
    <Container>
        <ImageContainer>
            <Image src = {props.product.popProImg}/>
            <Info>
                <Icon>
                    <BsCartPlus />
                </Icon>
                <Icon>
                    <BsHeart />
                </Icon>
                <Icon>
                    <BsSearch />
                </Icon>
            </Info>
        </ImageContainer>
        <ProductInfo>
            <ProductName>Gojo Tshirt</ProductName>
            <ProductRating>4.5</ProductRating>
            <ProductPrice>₹769</ProductPrice>
            <ProductMaker>Bewakoof - India</ProductMaker>
        </ProductInfo>
    </Container>
  )
}

export default ProductItem
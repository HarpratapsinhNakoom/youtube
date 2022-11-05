import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import Newsletter from './Newsletter'
import Footer from './Footer'
import {AiFillStar, AiOutlineStar, AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import { tablet } from '../responsive'

const Container = styled.div`
    margin: 30px;
    display: flex;
    ${tablet(
        {
            flexDirection : "column",
            margin : '15px'
        }
    )}
`
const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`
const Image = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    @media only screen and (max-width : 500px) {
        padding: 10px;
    }
`

const ReviewContainer = styled.div`
    margin: 15px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const ReviewCount = styled.span`
    font-size: 30px;
    letter-spacing: 1px;
    margin: 0 15px;
`
const Stars = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Title = styled.div`
    margin: 15px 0;
    letter-spacing: 1.5px;
    font-size: 50px;
    font-weight: 600;
    color: var(--dark-green);
`
const Desc = styled.div`
    margin: 15px 0;
    font-size: 22px;
    font-weight: 300;
    letter-spacing: 0.8px;
`
const Price = styled.div`
    margin: 15px 0;
    font-weight: 600;
    font-size: 35px;
`

const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin:15px 0 ;
`
const FilterItem = styled.div`
    margin: 8px 0;
`
const FilterHeading = styled.h2`
    letter-spacing: 1px;
    font-size: 24px;
    margin: 4px;
`
const Filter = styled.select`
    cursor: pointer;
    width: 70%;
    font-size: 20px;
    padding: 8px;
    border-radius: 10px;
    border: 2px solid var(--light-green);

    @media only screen and (max-width : 500px) {
        width: 100%;
    }
`
const Option = styled.option`
    color: rgba(0,1,1,0.7);
`
const Quantity = styled.div`
    margin:15px 0 ;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 20px;
`
const ItemAmount = styled.h3`
    font-size: 28px;
`

const ChangeAmount = styled.span`
    font-size: 20px;
    cursor: pointer;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    &:hover {
        background-color: lightgray;
    }
`

const AddToCart = styled.button`
    width: 70%;
    padding: 8px;
    font-size: 25px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    background-color: var(--dark-green);
    color:var(--white);
    letter-spacing: 1px;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
`
const SingleProduct = () => {
    const [itemAmount, setItemAmount] = React.useState(1);

    const increaseItem = () => {
        if(itemAmount >= 50) return;
        else {
            setItemAmount(itemAmount + 1);
        }
    }

    const decreaseItem = () => {
        if(itemAmount <= 1) return;
        else {
            setItemAmount(itemAmount - 1);
        }
    }
  return (
    <>
        <Navbar />
        <Container>
            <ImageContainer>
                <Image src='https://kiyodrip.in/wp-content/uploads/2022/07/Untitled-2.png'/>
            </ImageContainer>
            <InfoContainer>
                <ReviewContainer>
                    <ReviewCount>45 Reviews</ReviewCount>
                    <Stars>
                        {[...Array(4)].map(index => {
                            return (
                                <AiFillStar key={index}/>
                            );
                        })
                        }
                        {[...Array(5 - 4)].map(index => {
                            return (
                                <AiOutlineStar key={index}/>
                            );
                        })
                        }
                    </Stars>
                </ReviewContainer>
                <Title>Jiraiya Hoodie</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti velit esse soluta, ipsum, sint dolores blanditiis quas asperiores aliquam eius odio, quibusdam magni nesciunt cupiditate.</Desc>
                <Price>₹750</Price>

                <FilterContainer>
                    <FilterItem>
                        <FilterHeading>Size</FilterHeading>
                        <Filter>
                            <Option>Select an option</Option>
                            <Option>Female - XS</Option>
                            <Option>Female - S</Option>
                            <Option>Female - M</Option>
                            <Option>Female - L</Option>
                            <Option>Female - XL</Option>
                            <Option>Male - XS</Option>
                            <Option>Male - S</Option>
                            <Option>Male - M</Option>
                            <Option>Male - L</Option>
                            <Option>Male - XL</Option>
                        </Filter>
                    </FilterItem>

                    <FilterItem>
                        <FilterHeading>Color</FilterHeading>
                        <Filter>
                            <Option>Select an option</Option>
                            <Option>Blue</Option>
                            <Option>Green</Option>
                            <Option>Yellow</Option>
                            <Option>Red</Option>
                            <Option>Violet</Option>
                            <Option>Black</Option>
                        </Filter>
                    </FilterItem>

                    <Quantity>
                        <FilterHeading>Quantity</FilterHeading>
                        <ChangeAmount onClick={increaseItem}><AiOutlinePlus /></ChangeAmount>
                        <ItemAmount>{itemAmount}</ItemAmount>
                        <ChangeAmount onClick={decreaseItem}><AiOutlineMinus/></ChangeAmount>
                    </Quantity>
                </FilterContainer>

                <AddToCart>Add to cart</AddToCart>
            </InfoContainer>
        </Container>
        <Newsletter />
        <Footer />
    </>
  )
}

export default SingleProduct
import React from 'react';
import styled from 'styled-components';
import {IoMdArrowDropright, IoMdArrowDropleft} from 'react-icons/io'
import { sliderData } from '../data/homeData';
import { tablet } from '../responsive';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    background-color: ${props=>props.bgColor};
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    color:  ${props=>props.txtColor};
`;

const SlideImg = styled.div`
    flex: 1;
    /* width: 50%; */
    height: 100%;
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`
const SlideInfo = styled.div`
    flex: 1;
    padding: 10px;
    ${tablet({
        display:"none"
    })}
`;

const Title = styled.h1`
    font-size: 70px;
    ${tablet({
        fontSize:'50px'
    })}
`
const Desc = styled.div`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    ${tablet({
        fontSize:'17px'
    })}
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid ${props=>props.txtColor};
    color:inherit;
`

const Arrow = styled.div`
    width: 30px;
    height: 30px;
    background-color: var(--white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;

    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;

    left: ${props=>props.direction === 'left' && "10px"};
    right: ${props=>props.direction === 'right' && "10px"};
    
    :hover {
        opacity: 70%;
    }
`;
const Slider = () => {
    const [slideIndex, setSlideIndex] = React.useState(0);

    const handleClick = (direction) => {
        if(direction === "right") {
            setSlideIndex(slideIndex < 2 ?slideIndex + 1 : 0);
        }else{
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        }
    }

    const showSlider = sliderData.map((slideItem , index) => {
        return(
            <Slide key={index} bgColor = {slideItem.bgColor}  txtColor = {slideItem.txtColor}>
                <SlideImg>
                    <Image src={slideItem.imgLink}/>
                </SlideImg>
                <SlideInfo>
                    <Title>{slideItem.heading}</Title>
                    <Desc>{slideItem.desc}</Desc>
                    <Button>Shop NOW</Button>
                </SlideInfo>
            </Slide>
        );
    })
  return (
    <Container>
        <Arrow direction = 'left' onClick={() => handleClick("left")}><IoMdArrowDropleft/></Arrow>
        <Wrapper slideIndex = {slideIndex}>
            {showSlider}
        </Wrapper>
        <Arrow direction = 'right' onClick={() => handleClick("right")}><IoMdArrowDropright/></Arrow>
    </Container>
  )
}

export default Slider
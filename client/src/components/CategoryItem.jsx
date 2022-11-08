import React from 'react';
import styled from 'styled-components';
import { tablet } from '../responsive';
import {Link} from 'react-router-dom'

const Info = styled.div`
    opacity: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    text-align: center;
    background-color: rgba(0,0,0,0.45);
    border-radius: inherit;
`

const Container = styled.div`
    background-image: url(${props=>props.bgImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 270px;
    width: 270px;
    margin: 25px;
    /* padding: 20px; */
    border-radius: 8px;
    box-shadow: 1px 5px 15px -2px rgba(0,0,0,0.5);
    -webkit-box-shadow: 1px 5px 15px -2px rgba(0,0,0,0.5);
    -moz-box-shadow: 1px 5px 15px -2px rgba(0,0,0,0.5);

    &:hover ${Info} {
        opacity : 1;
    }

    ${tablet({
        margin : "25px 0",
        width : "320px",
        height : "320px"
    })}
`

const Title = styled.div`
    color: var(--dark-skin);
    font-weight: 700;
    font-size: 40px;
    margin: 8px 0;
    letter-spacing: 10px;
`;

const Button = styled.button`
    padding: 7px;
    border-radius: 4px;
    border: none;
    font-size: 16px;
    color: var(--dark-green);
    background-color: var(--white);
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 20px;
`
const CategoryItem = (props) => {
  return (
    <Container bgImg = {props.item.imgLink}>
        <Info>
            <Title>
                {props.item.heading}
            </Title>
            <Link to={`/products/${props.item.heading.toLowerCase()}`}><Button>SHOP NOW</Button></Link>
        </Info>
    </Container>
  )
}

export default CategoryItem
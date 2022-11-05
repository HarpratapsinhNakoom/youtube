import React from 'react';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';

const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 20px;
    @media only screen and (max-width : 370px) {
        padding: 5px;
    }
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px 55px;
    @media only screen and (max-width : 550px) {
        margin: 30px 0;
    }
`

const TopButton = styled.button`
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: 600;
    background-color: ${props => props.type === 'hollow' ? 'white' : 'var(--dark-green)'};
    color: ${props => props.type === 'hollow' ? 'var(--dark-green)' : 'var(--white)'};
    border: 1px solid var(--dark-green);
    border-radius: 08px;
    transition: all 0.3s ease;

    &:hover{
        /* background-color:${props => props.type === 'hollow' ?'var(--dark-green)' : 'white'};
        color: ${props => props.type === 'hollow' ? 'white' : 'var(--dark-green)'}; */
        transform: scale(1.05);
    }

    @media only screen and (max-width : 400px) {
        font-size: 17px;
        padding: 10px;
    }
`

const Bottom = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @media only screen and (max-width : 850px) {
        flex-direction: column;
        justify-content: center;
    }
`
const Info = styled.div`
    flex: 5;
`

const CartProduct = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 10px;

    @media only screen and (max-width : 595px) {
        flex-direction: column;
        margin: 0;
    }
`
const ProductDetail = styled.div`
    display: flex;
    @media only screen and (max-width : 450px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
const Image = styled.img`
    width: 220px;
    height: 220px;
    object-fit: contain;
    @media only screen and (max-width : 450px) {
        width: 300px;
        height: 300px;
        margin-bottom: 35px;
    }
`
const Details = styled.div`
    max-width: 350px;
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media only screen and (max-width : 595px) {
        flex-direction: column;
        margin: 0 10px;
    }
`
const ProductName = styled.div`
    font-size: 25px;
    font-weight: 600;
    color: var(--dark-green);
    letter-spacing: 1.6px;
    word-spacing: 2px;
    @media only screen and (max-width : 595px) {
        font-size: 20px;
    }
    @media only screen and (max-width : 450px) {
        font-size: 35px;
        margin: 15px 0;
    }
`
const ProductColor = styled.div`
    font-size: 22px;
    letter-spacing: 1.2px;
    color: var(--dark-skin);

    span{
        background-color: ${props=>props.txtColor};
        color: var(--white);
        padding: 4px 8px;
        font-weight: 500;
        border-radius: 4px;
    }

    @media only screen and (max-width : 595px) {
        font-size: 17px;
    }
    @media only screen and (max-width : 450px) {
        font-size: 25px;
        margin: 15px 0;
    }
`
const ProductSize = styled.span`
    font-size: 22px;
    letter-spacing: 1.2px;
    color: var(--dark-skin);

    span{
        color: black;
        font-weight: 500;
        text-decoration: underline;
    }

    @media only screen and (max-width : 595px) {
        font-size: 17px;
    }

    @media only screen and (max-width : 450px) {
        font-size: 35px;
        margin: 15px 0;
    }
`

const ItemAmount = styled.h3`
    margin: 0 10px;
    font-size: 35px;
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
const QuantityControls = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
`
const PriceDetail = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    @media only screen and (max-width : 595px) {
        flex-direction: row;
        margin-top: 50px;
    }
`
const Price = styled.span`
    font-size: 38px;
    font-weight: 500;
`
const Hr = styled.hr`
    background-color: #000;
    opacity: 30%;
    border: none;
    height: 1px;
    margin: 35px 0;
`

const Summary = styled.div`
    flex: 2;
    border: 0.5px solid black;
    border-radius: 8px;
    padding: 25px;
`

const SummaryTitle = styled.h1`
    color: var(--dark-green);
    font-size: 36px;
    font-weight: 400;
    margin-bottom: 20px;
`
const SummaryItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 12px 0;
    margin-top: ${props=>props.type === 'totalContainer' ? '30px' : '12px'};
`
const SummaryItemText = styled.span`
    font-size: ${props=>props.type === 'total' ? '35px' : '20px'};
    letter-spacing:1px;
`
const SumarryItemPrice = styled.span`
    font-size: ${props=>props.type === 'total' ? '40px' : '25px'};
    font-weight: 500;
    color: ${props=>props.type === 'total' ? 'var(--dark-skin)' : 'var(--light-green)'};
`
const Button = styled.button`
    width: 100%;
    padding: 8px;
    font-size: 25px;
    background-color: black;
    color: var(--white);
    border-radius: 10px;
    cursor: pointer;
    margin-top: 20px;
    transition: all 0.5s ease;

    &:hover {
        transform: scale(1.06);
    }
`
const Cart = () => {
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
    <Container>
        <Navbar/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton type='hollow'>Continue shopping</TopButton>
                <TopButton type='filled'>Checkout now</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <CartProduct>
                        <ProductDetail>
                            <Image src='https://comicsense.b-cdn.net/wp-content/uploads/2022/05/itadori-1_comicsense.jpg'/>
                            <Details>
                                <ProductName>Itadori Jujutsu Unifrom Hooded-Tshirt</ProductName>
                                <ProductColor txtColor='darkblue'>
                                    <b>Color</b> : <span>Blue</span>
                                </ProductColor>
                                <ProductSize>
                                    <b>Size</b> : <span>Medium</span>
                                </ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <QuantityControls>
                                <ChangeAmount onClick={increaseItem}><AiOutlinePlus /></ChangeAmount>
                                <ItemAmount>{itemAmount}</ItemAmount>
                                <ChangeAmount onClick={decreaseItem}><AiOutlineMinus/></ChangeAmount>
                            </QuantityControls>
                            <Price>
                                ₹{itemAmount * 700}
                            </Price>
                        </PriceDetail>
                    </CartProduct>
                    <Hr/>
                </Info>
                
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SumarryItemPrice>₹700</SumarryItemPrice>
                    </SummaryItem>

                    <SummaryItem>
                        <SummaryItemText>Shipping Charges</SummaryItemText>
                        <SumarryItemPrice>₹100</SumarryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="totalContainer">
                        <SummaryItemText type="total">Total</SummaryItemText>
                        <SumarryItemPrice type="total">₹800</SumarryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Cart
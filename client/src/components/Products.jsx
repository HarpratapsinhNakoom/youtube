import React from 'react'
import styled from 'styled-components'
import { popularProductsData } from '../data/homeData'
import ProductItem from './ProductItem';
import axios from 'axios'

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    /* display: grid;
    grid-template-columns: repeat(5,1fr); */
    margin: 8px;
`

const Products = (props) => {
    const [products, setProducts] = React.useState([]);
    const [filteredProducts, setFilteredProducts] = React.useState([]);

    React.useEffect(() => {
        const getProducts = async () => {
            try{
                const res = await axios.get(
                    props.category ? 
                    `http://localhost:5000/api/products?category=${props.category}`
                    : "http://localhost:5000/api/products");
                console.log(props.category)
                // console.log(res);
            }catch(err) {
                console.log(err)
            }
        }
        getProducts();
    }, [props.category])
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
import React from 'react'
import styled from 'styled-components'
import {AiOutlineArrowUp} from 'react-icons/ai'

const Container = styled.div`
    position: fixed;
    background-color: var(--dark-skin);
    font-size: 35px;
    padding: 10px;
    border-radius: 8px;
    z-index: 100;
    bottom: 10px;
    cursor: pointer;
    right: 10px;
`

const ToTop = () => {
    const btn = document.querySelector('#toTopBtn');
    window.addEventListener('scroll', scrollFunction)

    console.log(btn.style.display);
    function scrollFunction() {
        if (document.documentElement.scrollTop > 100) {
          // console.log(btn);
          // console.log(btn);
          // btn.style.display = "block";
        } else {
          // btn.style.display = "none";
        }
    }

    function topFunction() {
        document.documentElement.scrollTop = 0;
    }
  return (
        <Container id='toTopBtn' onClick={topFunction}>
            <AiOutlineArrowUp />
        </Container>
  )
}

export default ToTop
import React from 'react'
import Categories from '../components/Categories'
import Cons from '../components/Cons'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import HomeProducts from '../components/HomeProducts'
import Slider from '../components/Slider'
import TopAnime from '../components/TopAnime'
// import ToTop from '../components/ToTop'

const Home = () => {
  return (
    <div style={{position : 'relative'}}>
        {/* <ToTop /> */}
        <Navbar />
        <Slider />
        <Categories />
        <Cons />
        <HomeProducts />
        <TopAnime />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home
import React from "react"
import Banner from "../components/Banner"
import Carousel from "../components/Carousel"
import Featured from "../components/Featured"

const Home = () => {
    return <div>
      <Banner/>
      <Carousel/>
      <Featured type="isFeatured"/>
    </div>
}

export default Home

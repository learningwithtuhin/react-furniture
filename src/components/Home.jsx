import React from 'react'
import Banner from './Banner'
import FeaturesSection from './FeaturesSection'
import Category from './Category'
import AboutSection from './AboutSection'
import ProductList from './productList'
import BestSeller from './BestSeller'
import Marquee from './Marquee'
import DealSec from './DealSec'
import MiniOffer from './MiniOffer'
import LatestProduct from './LatestProduct'
import ReviewSec from './ReviewSec'
import BlogSec from './BlogSec'


const Home = () => {
  return (
    <div>
      <Banner/>
      <FeaturesSection/>
      <Category/>
     <BestSeller/>
      <AboutSection/>
      <Marquee/>
      <DealSec/>
      <MiniOffer/>
      <LatestProduct/>
      <ReviewSec/>
      <BlogSec/>
    </div>
  )
}

export default Home
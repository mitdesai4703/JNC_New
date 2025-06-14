import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import NewsLetter from '../components/NewsLetter'
import FeatureBanner from '../components/FeatureBanner'

const Home = () => {
  return (
    <div className='mt-10'>
      <MainBanner />
      <Categories />
      <FeatureBanner/>
      <NewsLetter />
    </div>
  )
}

export default Home

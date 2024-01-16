import React from 'react'

import Navbar from '../Navbar/Navbar'
import Slider from '../Slider/Slider'
import NavigateButtons from '../NavigateButtons/NavigateButtons'
import ProductSection from '../ProductSection/ProductSection'

const Main = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <NavigateButtons />
      <ProductSection />
    </>
  )
}

export default Main

import React from 'react'

import { storeData } from '../../assets/data/data'
import ProductSectionItem from './ProductSectionItem'

const ProductSection = () => {
  return (
    <>
      <div className='bg-black p-2 w-[50%] mx-auto rounded-md'>
        <h1 className='text-red-600 text-center text-lg font-inter font-bold tracking-normal leading-none'>
          SUMMER SALE 30%
        </h1>
      </div>
      <div className='grid grid-cols-3 justify-items-center py-8 gap-4 mx-auto max-w-7xl'>
        {storeData.slice(0, 6).map((product, index) => (
          <div key={index}>
            <ProductSectionItem product={product} />
          </div>
        ))}
      </div>
    </>
  )
}

export default ProductSection

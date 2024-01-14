import React from 'react'
import { Button } from '@material-tailwind/react'

import clothes from '../../assets/images/clothes.jpg'

const NavigateButtons = () => {
  const buttons = [
    'Hoodies',
    'Dresses',
    'Suites',
    'Shoes',
    'T-Shirts',
    'Jeans',
    'Jackets',
    'Bags',
  ]

  return (
    <>
      <div className='flex items-center justify-center py-8'>
        {buttons.map((btn, index) => (
          <div key={index} className='mr-4'>
            <Button
              color='gray'
              size='lg'
              variant='outlined'
              ripple={true}
              className='hover:bg-green-300 duration-300 ease-out'
            >
              {btn}
            </Button>
          </div>
        ))}
      </div>
      <div className='bg-green-300 p-2 w-[55%] mx-auto rounded-md'>
        <h3 className='text-orange-900 text-center text-lg font-inter font-bold tracking-normal leading-none'>
          SALES UP TO 50%
        </h3>
      </div>
      <div className='flex justify-center items-center py-4'>
        <img
          src={clothes}
          alt='Clothes'
          className='h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600'
        />
      </div>
    </>
  )
}

export default NavigateButtons

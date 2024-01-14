import React from 'react'

import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from '@material-tailwind/react'

import clothes from '../../assets/images/clothes.jpg'
import { filterProducts } from '../../features/slices/productsSlice'

const NavigateButtons = () => {
  const buttons = [
    'Hoodies',
    'Dresses',
    'Suits',
    'Shoes',
    'T-Shirts',
    'Jeans',
    'Jackets',
    'Bags',
  ]

  const dispatch = useDispatch()

  return (
    <>
      <div className='flex items-center justify-center py-8'>
        {buttons.map((btn, index) => (
          <div key={index} className='mr-4'>
            <Link to={`/filteredProducts/${btn}`}>
              <Button
                color='gray'
                size='lg'
                variant='outlined'
                ripple={true}
                className='hover:bg-green-300 duration-300 ease-out'
                onClick={() => dispatch(filterProducts(btn))}
              >
                {btn}
              </Button>
            </Link>
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

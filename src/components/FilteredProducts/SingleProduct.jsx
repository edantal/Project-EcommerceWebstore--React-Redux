import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Tooltip, Button } from '@material-tailwind/react'

import { addToCart } from '../../features/slices/cartSlice'

const SingleProduct = () => {
  const product = useSelector((state) => state.products.singleProduct)
  const productSize = product[0].size ? product[0].size[0] : ''
  const producColor = product[0].color ? product[0].color[0] : ''

  const dispatch = useDispatch()
  const { id } = useParams()
  const [size, setSize] = useState(productSize)
  const [color, setColor] = useState(producColor)

  return (
    <>
      {product
        .filter((product) => product.id === id)
        .map((item, index) => (
          <div key={index} className='flex justify-center items-center py-10'>
            <div className='pl-44 grow-[2]'>
              <img
                src={item.img}
                alt={item.name}
                className='h-[850px] rounded-lg'
              />
            </div>
            <div className='grow-[3]'>
              <div className='max-w-lg'>
                <h5 className='text-2xl font-inter font-bold tracking-normal leading-none pb-4'>
                  {item.name}
                </h5>

                <p className='text-orange-700 text-xl font-inter font-bold tracking-normal leading-none pb-4'>
                  15% off
                </p>

                <p className='text-gray-600 text-md font-inter font-bold tracking-normal leading-2 pb-4'>
                  {item.text}
                </p>

                {item.size && (
                  <div className='pb-4'>
                    <div>
                      <label
                        htmlFor='size'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                      >
                        Select a size
                      </label>
                      <select
                        id='size'
                        name='size'
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      >
                        {item.size.map((sz, index) => (
                          <option key={index} value={sz}>
                            {sz}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {item.size && (
                  <div className='pb-4'>
                    <div>
                      <label
                        htmlFor='color'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                      >
                        Select a color
                      </label>
                      <select
                        id='color'
                        name='color'
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      >
                        {item.color.map((clr, index) => (
                          <option key={index} value={clr}>
                            {clr}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}
                <Tooltip content='Add to Cart' placement='bottom'>
                  <Button
                    color='gray'
                    size='lg'
                    variant='outlined'
                    ripple={true}
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: item.id,
                          price: item.price,
                          amount: 1,
                          totalPrice: item.price,
                          name: item.name,
                          text: item.text,
                          img: item.img,
                          size: size,
                          color: color,
                        })
                      )
                    }
                  >
                    Add to Cart
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>
        ))}
    </>
  )
}

export default SingleProduct

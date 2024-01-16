import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { Avatar, Button, Tooltip } from '@material-tailwind/react'

import logo from '../../assets/images/logo.png'
import Cart from '../Cart/Cart'
import { logout } from '../../features/slices/authSlice'

const Navbar = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)
  const { name, image } = user
  const totalAmount = useSelector((state) => state.cart.totalAmount)
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <>
      <div className='bg-black p-2 w-full'>
        <h3 className='text-white font-inter text-2xl font-bold tracking-normal leading-none text-center'>
          Welcome
        </h3>
      </div>
      <div className='flex justify-around items-center'>
        <div>
          <img className='h-28 w-full' src={logo} alt='' />
        </div>
        <div className='flex flex-row items-center'>
          <button className='font-inter text-base font-medium tracking-normal leading-none text-center mr-4'>
            Logout
          </button>
          <div className='flex flex-row items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='#000000'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
              />
            </svg>
            <p className='font-inter text-base font-medium tracking-normal leading-none text-center mr-2'>
              Wishlist
            </p>
          </div>
          <div
            className='flex flex-row items-center cursor-pointer'
            onClick={handleOpen}
          >
            {totalAmount > 0 && (
              <span className='rounded-full bg-gray-300 font-inter text-sm px-2 mr-1'>
                {totalAmount}
              </span>
            )}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='#000000'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
              />
            </svg>
            <p className='font-inter text-base font-medium tracking-normal leading-none text-center mr-2'>
              Cart
            </p>
            <div>{open && <Cart openModal={open} setOpen={setOpen} />}</div>
          </div>
          <div className='flex flex-row items-center justify-center pl-4'>
            {image && (
              <Avatar
                src={image}
                alt='avatar'
                size='sm'
                className='mr-2 border-black'
              />
            )}
          </div>
          <div onClick={() => dispatch(logout())}>
            <Tooltip content='Sign out' placement='bottom'>
              <p className='font-inter font-medium text-sm tracking-normal leading-none'>
                Hi {name.charAt('0').toUpperCase() + name.slice(1)}
              </p>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className='bg-black flex p-4 w-full justify-around'>
        <div className='text-white font-inter text-base font-medium tracking-normal leading-none text-center mr-2'>
          50% off
        </div>
        <div className='text-white font-inter text-base font-medium tracking-normal leading-none text-center mr-2'>
          Free Shipping
        </div>
        <div className='text-white font-inter text-base font-medium tracking-normal leading-none text-center mr-2'>
          Different Payment Methods
        </div>
      </div>
    </>
  )
}

export default Navbar

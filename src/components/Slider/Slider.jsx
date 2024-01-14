import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { sliderData } from '../../assets/data/data'
import {
  nextSlide,
  prevSlide,
  dotSlide,
} from '../../features/slices/sliderSlice'

const Slider = () => {
  const slideIndex = useSelector((state) => state.slider.value)
  const dispatch = useDispatch()

  return (
    <div className='relative pb-4'>
      <div>
        {sliderData.map((item) => (
          <div
            key={item.id}
            className={
              parseInt(item.id) === slideIndex
                ? 'opacity-100 duration-700 ease-out'
                : 'opacity-0 duration-700 ease-out'
            }
          >
            <div>
              {parseInt(item.id) === slideIndex && (
                <img
                  className='h-[850px] w-full'
                  src={item.img}
                  alt={item.text}
                />
              )}
            </div>
            <div className='absolute top-44 mx-auto inset-x-1/4'>
              <p className='text-white text-4xl font-inter font-bold tracking-normal leading-none'>
                {parseInt(item.id) === slideIndex && item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='flex absolute bottom-12 left-[50%] translate-x-[-50%]'>
        {sliderData.map((item, index) => (
          <div key={index} className='mr-2'>
            <div
              className={
                index === slideIndex
                  ? 'bg-green-300 rounded-full p-1 cursor-pointer'
                  : 'bg-white rounded-full p-1 cursor-pointer'
              }
              onClick={() => dispatch(dotSlide(index))}
            ></div>
          </div>
        ))}
      </div>
      <div>
        <button
          className='absolute top-[50%] right-4 bg-white rounded-full p-2 hover:bg-green-300'
          onClick={() => dispatch(nextSlide(slideIndex + 1))}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m8.25 4.5 7.5 7.5-7.5 7.5'
            />
          </svg>
        </button>
        <button
          className='absolute top-[50%] left-4 bg-white rounded-full p-2 hover:bg-green-300'
          onClick={() => dispatch(prevSlide(slideIndex - 1))}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 19.5 8.25 12l7.5-7.5'
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Slider

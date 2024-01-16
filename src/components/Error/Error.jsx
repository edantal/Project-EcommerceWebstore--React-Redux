import React from 'react'

import { Alert } from '@material-tailwind/react'

const Error = () => {
  return (
    <div className='grid grid-cols-1 items-center justify-items-center pt-10'>
      <div className='w-[96]'>
        <Alert color='red' className='text-xl font-inter font-bold'>
          Sorry, no matches found. Please clear the filter and try again
        </Alert>
      </div>
    </div>
  )
}

export default Error

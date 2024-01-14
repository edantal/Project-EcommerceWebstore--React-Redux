import React from 'react'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react'

const ProductCard = ({ id, name, text, img, price, colors }) => {
  return (
    <Card className='w-96'>
      <CardHeader color='white' className='relative h-96'>
        <img src={img} alt='' className='h-full w-full' />
      </CardHeader>
      <CardBody className='text-center'>
        <Typography variant='h5' className='mb-2'>
          {name}
        </Typography>
        <Typography>{text}</Typography>
      </CardBody>
      <CardFooter divider className='flex items-center justify-between py-3'>
        <Typography variant='small'>€ {price}</Typography>
        <div className='flex gap-1'>
          {colors?.map((color, index) => (
            <div
              key={index}
              style={{ backgroundColor: color }}
              className='p-1 rounded-full mr-1'
            ></div>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}

export default ProductCard

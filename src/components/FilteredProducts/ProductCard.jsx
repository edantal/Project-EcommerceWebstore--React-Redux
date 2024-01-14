import React from 'react'

import { useDispatch } from 'react-redux'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react'
import { Link, useParams } from 'react-router-dom'

import { singleProduct } from '../../features/slices/productsSlice'

const ProductCard = ({ id, name, text, img, price, colors }) => {
  const dispatch = useDispatch()
  const { type } = useParams()

  return (
    <Link to={`/filteredProducts/${type}/${id}`}>
      <Card className='w-96' onClick={() => dispatch(singleProduct(id))}>
        <CardHeader color='white' className='relative h-96'>
          <img src={img} alt='' className='h-full w-full object-cover' />
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
    </Link>
  )
}

export default ProductCard

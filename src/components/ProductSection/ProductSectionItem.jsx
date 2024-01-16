import React from 'react'

import { useDispatch } from 'react-redux'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from '@material-tailwind/react'

import { addToCart } from '../../features/slices/cartSlice'

const ProductSectionItem = ({ product }) => {
  const dispatch = useDispatch()

  const defaultSize = product.size[0]
  const defaultColor = product.color[0]

  return (
    <>
      <Card className='w-96'>
        <CardHeader floated={false} className='h-96'>
          <img src={product.img} alt={product.name} />
        </CardHeader>
        <CardBody className='text-center'>
          <Typography variant='h4' color='blue-gray' className='mb-2'>
            {product.name}
          </Typography>
          <Typography color='gray' className='font-medium' textGradient>
            {product.text}
          </Typography>
          <div className='flex justify-between items-center pt-4'>
            <Typography color='gray' className='font-medium' textGradient>
              Size: {defaultSize}
            </Typography>
            <Typography color='gray' className='font-medium' textGradient>
              Color:{' '}
              <span
                className='px-2 rounded-full ml-2'
                style={{ backgroundColor: defaultColor }}
              ></span>
            </Typography>
          </div>
        </CardBody>
        <CardFooter className='flex justify-center gap-7 pt-2'>
          <Tooltip content='Add to Cart' placement='bottom'>
            <Button
              size='md'
              color='gray'
              variant='outlined'
              ripple={true}
              onClick={() =>
                dispatch(
                  addToCart({
                    id: product.id,
                    name: product.name,
                    img: product.img,
                    text: product.text,
                    size: defaultSize,
                    color: defaultColor,
                    amount: 1,
                    price: product.price,
                    totalPrice: product.totalPrice,
                  })
                )
              }
            >
              Add to Cart
            </Button>
          </Tooltip>
        </CardFooter>
      </Card>
    </>
  )
}

export default ProductSectionItem

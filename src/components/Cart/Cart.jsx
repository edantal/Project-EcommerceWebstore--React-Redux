import React, { Fragment } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Tooltip,
} from '@material-tailwind/react'

import { removeFromCart } from '../../features/slices/cartSlice'

const Cart = ({ openModal, setOpen }) => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.cart)
  const totalPrice = useSelector((state) => state.cart.totalPrice)

  return (
    <div>
      {cart?.length > 0 ? (
        <Fragment>
          <Dialog
            className='border-0 outline-0'
            open={openModal}
            handler={() => setOpen(false)}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogHeader>Shopping Cart</DialogHeader>
            <DialogBody
              divider
              className='flex flex-col justify-center items-start'
            >
              {cart.map((item, index) => (
                <div key={index}>
                  <div className='grid grid-cols-2 py-4 gap-4'>
                    <div>
                      <img
                        src={item.img}
                        alt={item.name}
                        className='h-[125px] rounded-md object-cover'
                      />
                      <div className='flex flex-col items-start'>
                        <h4 className='text-black text-base font-inter font-bold tracking-normal leading-none py-2'>
                          {item.name}
                        </h4>
                        <div className='max-w-xs'>
                          <p className='text-black text-xs font-inter tracking-normal leading-2 py-2'>
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className='text-black text-xs font-inter tracking-normal leading-none py-1'>
                        Selected Size: <span className='ml-2'>{item.size}</span>
                      </p>
                      <p className='text-black text-xs font-inter tracking-normal leading-none py-1'>
                        Selected Color:{' '}
                        <span
                          className='rounded-full px-2 ml-2'
                          style={{ backgroundColor: item.color }}
                        ></span>
                      </p>
                      <p className='text-black text-xs font-inter tracking-normal leading-none py-1'>
                        Amount: <span className='ml-2'>{item.amount}</span>
                      </p>
                      <p className='text-black text-xs font-inter tracking-normal leading-none py-1'>
                        Single item price:{' '}
                        <span className='ml-2'>€ {item.price}</span>
                      </p>
                      <p className='text-black text-xs font-inter tracking-normal leading-none py-1'>
                        Total item price:{' '}
                        <span className='ml-2'>€ {item.totalPrice}</span>
                      </p>
                      <div className='pt-4'>
                        <Tooltip content='Remove from cart' placement='bottom'>
                          <Button
                            size='sm'
                            color='red'
                            ripple={true}
                            variant='filled'
                            onClick={() => dispatch(removeFromCart(item))}
                          >
                            Remove
                          </Button>
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </DialogBody>
            <DialogFooter className='flex justify-start items-center'>
              <p className='text-black text-base font-inter tracking-normal leading-none py-2'>
                Total cart price: <span className='ml-2'>€ {totalPrice}</span>
              </p>
            </DialogFooter>
          </Dialog>
        </Fragment>
      ) : (
        <Fragment>
          <Dialog
            className='border-0 outline-0'
            open={openModal}
            handler={() => setOpen(false)}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogHeader>Shopping Cart</DialogHeader>
            <DialogBody divider>
              <div>
                <h1 className='text-black text-3xl font-inter font-bold tracking-normal leading-none py-4'>
                  Your cart is empty
                </h1>
                <p className='text-black text-base font-inter tracking-normal leading-none'>
                  Add some products
                </p>
              </div>
            </DialogBody>
          </Dialog>
        </Fragment>
      )}
    </div>
  )
}

export default Cart

import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from '@material-tailwind/react'

import { login } from '../../features/slices/authSlice'

const Login = () => {
  const dispatch = useDispatch()
  const initialState = {
    name: '',
    password: '',
    image: '',
  }

  const [values, setValues] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  return (
    <div className='grid grid-cols-1 items-center justify-items-center h-screen'>
      <Card className='w-96'>
        <CardHeader
          variant='gradient'
          color='gray'
          className='mb-4 grid h-28 place-items-center'
        >
          <Typography variant='h3' color='white'>
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className='flex flex-col gap-4'>
          <Input
            label='Name'
            size='lg'
            type='text'
            name='name'
            value={values.name}
            onChange={handleChange}
          />
          <Input
            label='Password'
            size='lg'
            type='password'
            name='password'
            value={values.password}
            onChange={handleChange}
          />
          <Input
            label='Image URL'
            size='lg'
            type='text'
            name='image'
            value={values.image}
            onChange={handleChange}
          />
        </CardBody>
        <CardFooter className='pt-0'>
          <Button
            variant='gradient'
            fullWidth
            onClick={() => dispatch(login(values))}
          >
            Sign In
          </Button>
          {/* <Typography variant='small' className='mt-6 flex justify-center'>
            Don&apos;t have an account?
            <Typography
              as='a'
              href='#signup'
              variant='small'
              color='blue-gray'
              className='ml-1 font-bold'
            >
              Sign up
            </Typography>
          </Typography> */}
          {/* <Typography variant='small' className='mt-6 flex justify-center'>
            Image is optional
          </Typography> */}
        </CardFooter>
      </Card>
    </div>
  )
}

export default Login

import React, { useState } from 'react'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from '@material-tailwind/react'

const Login = () => {
  const initialState = {
    email: '',
    password: '',
    image: '',
  }

  const [values, setValues] = useState(initialState)

  const handleChange = (e) => {
    const { email, value } = e.target
    setValues({ ...values, [email]: value })
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
            label='Email'
            size='lg'
            type='email'
            name='email'
            value={values.email}
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
          <Button variant='gradient' fullWidth>
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

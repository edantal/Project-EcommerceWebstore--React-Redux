import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './App.css'
import Main from './components/Main/Main'
import FilteredProducts from './components/FilteredProducts/FilteredProducts'
import SingleProduct from './components/FilteredProducts/SingleProduct'
import Login from './components/Login/Login'

function App() {
  const user = useSelector((state) => state.user.user)
  const { authUser } = user

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={authUser ? <Main /> : <Login />} />
          <Route
            path='/filteredProducts/:type'
            element={<FilteredProducts />}
          />
          <Route
            path='/filteredProducts/:type/:id'
            element={<SingleProduct />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

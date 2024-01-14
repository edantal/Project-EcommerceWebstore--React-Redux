import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Main from './components/Main/Main'
import FilteredProducts from './components/FilteredProducts/FilteredProducts'
import SingleProduct from './components/FilteredProducts/SingleProduct'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
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

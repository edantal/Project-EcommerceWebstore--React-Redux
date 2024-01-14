import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Main from './components/Main/Main'
import FilteredProducts from './components/FilteredProducts/FilteredProducts'

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
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

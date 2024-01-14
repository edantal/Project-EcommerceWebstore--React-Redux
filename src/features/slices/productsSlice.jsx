import { createSlice } from '@reduxjs/toolkit'

import { storeData } from '../../assets/data/data'

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    filteredProducts:
      JSON.parse(sessionStorage.getItem('filteredData')) || storeData,
  },
  reducers: {
    filterProducts(state, action) {
      try {
        const filter = storeData.filter(
          (product) => product.type === action.payload
        )
        state.filteredProducts = filter
        const saveState = JSON.stringify(filter)
        sessionStorage.setItem('filteredData', saveState)
      } catch (err) {
        return err
      }
    },
  },
})

export const { filterProducts } = productSlice.actions
export default productSlice.reducer

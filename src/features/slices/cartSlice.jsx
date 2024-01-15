import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const productId = action.payload
      try {
        const exist = state.cart.find(
          (product) =>
            product.id === productId &&
            product.size === productId.size &&
            product.color === productId.color
        )
        if (exist) {
          exist.amount++
          exist.totalPrice += productId.price
          state.totalAmount++
          state.totalPrice += productId.price
        } else {
          state.cart.push({
            id: productId.id,
            name: productId.name,
            amount: 1,
            price: productId.price,
            totalPrice: productId.price,
            size: productId.size,
            color: productId.color,
          })
          state.totalAmount++
          state.totalPrice += productId.price
        }
      } catch (err) {
        return err
      }
    },
  },
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer

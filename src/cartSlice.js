
// import { createSlice } from '@reduxjs/toolkit';
// const initialState = {
//   items: [],
// };
// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addItemToCart(state, action) {
//       const newItem = action.payload;
//       state.items.push({...newItem});
//     },
    
//   },
// });
// export const { addItemToCart } = cartSlice.actions;
// export default cartSlice.reducer;
// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      state.items.push(action.payload);
    },
    removeItemFromCart(state, action) {
      const itemToRemove = action.payload;
      state.items = state.items.filter(item => item.id !== itemToRemove.id);
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;

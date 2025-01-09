import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("cart/fetchUser", async (id) => {
  const response = await axios.get(
    `http://jsonplaceholder.typicode.com/todos/${id}`
  );
  return response.data;
});

const initialState = {
  cartList: [],
  cartCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      state.cartList.push({ ...actions.payload, count: 1 });
    },
    increment: (state, actions) => {
      const productID = actions.payload;
      state.cartList.forEach((item) => {
        if (item?.id === productID) {
          item.count++;
        }
      });
    },
    decrement: (state, action) => {
      const productID = action.payload;
      const itemIndex = state.cartList.findIndex(
        (item) => item?.id === productID
      );

      if (itemIndex !== -1) {
        const item = state.cartList[itemIndex];
        item.count--;

        if (item.count === 0) {
          state.cartList.splice(itemIndex, 1);
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, () => {
        console.log("loading start");
      })
      .addCase(fetchUser.fulfilled, () => {
        console.log("success");
      })
      .addCase(fetchUser.rejected, () => {
        console.log("rejected");
      });
  },
});

export const { increment, decrement, addToCart } = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface cartItem {
  name: string;
  desc: string;
  price: number;
  img: string;
  cartQuantity: number;
}

interface initialState1 {
  cartItems: cartItem[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
}

const initialState: initialState1 = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: initialState1, action: PayloadAction<cartItem>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.name === action.payload.name
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
    },
    removeFromCart: (state: initialState1, action: PayloadAction<string>) => {
      const nextCartItems = state.cartItems.filter(
        (item) => item.name !== action.payload
      );

      state.cartItems = nextCartItems;
    },
    decreaseCart(state: initialState1, action: PayloadAction<cartItem>) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.name === action.payload.name
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.name !== action.payload.name
        );

        state.cartItems = nextCartItems;
      }
    },
    clearCart(state: initialState1, action: any) {
      state.cartItems = [];
    },
    getTotal(state: initialState1, action: any) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotal } =
  cartSlice.actions;

export default cartSlice.reducer;

import { atom, selector } from 'recoil';

export const loggedInState = atom({
  key: 'loggedInState',
  default: false,
});
export const usernameState = atom({
  key: 'usernameState',
  default: '', // Initially, username is empty
});

// atoms.js
export const emailState = atom({
  key: 'emailState',
  default: '',
});
// Atom for storing the list of products
// atoms.js

export const productListState = atom({
  key: 'productListState',
  default: [],
});


//////// Cart ////////
export const cartState = atom({
  key: 'cartState', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export const totalAmountState = selector({
  key: 'totalAmountState',
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  },
});
// Atom for total quantity
export const totalQuantityState = selector({
  key: 'totalQuantityState',
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((total, item) => total + item.quantity, 0);
  },
});

export const productQuantitySelector = selector({
  key: 'productQuantitySelector',
  get: ({ get }) => (productId) => {
    const cart = get(cartState);
    const product = cart.find(item => item.id === productId);
    return product ? product.quantity : 0;
  },
});
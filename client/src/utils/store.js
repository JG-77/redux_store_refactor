import { createStore } from 'redux';
import reducers from './reducers';

const initialState = {
  products: [],
  cart: [],
  cartOpen: false,
  categories: [],
  currentCategory: '',
};

//store will use redux to create a store that changes the state
const store = createStore(reducers, initialState);

export default store;

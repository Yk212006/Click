import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";

import { ProductReducer } from "./Product/Product.reducer";
import { CartReducer } from "./Cart/Cart.reducer";
import { loginReducer } from "./AuthReducer/LoginAuth/loginReducer";
import { adminReducer } from "./Admin/reducer";
import { UserReducer } from "./user/reducer";

// Enhanced SHOP reducer with comprehensive initial state
const shopReducer = (state = {
  products: [],
  cart: [],
  loading: false,
  error: null,
  user: null,
  orders: [],
  categories: [],
  filters: {},
  pagination: {},
  search: '',
  sortBy: 'name',
  sortOrder: 'asc'
}, action) => {
  switch (action.type) {
    case 'SHOP/SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'SHOP/SET_CART':
      return { ...state, cart: action.payload };
    case 'SHOP/SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SHOP/SET_ERROR':
      return { ...state, error: action.payload };
    case 'SHOP/SET_USER':
      return { ...state, user: action.payload };
    case 'SHOP/SET_ORDERS':
      return { ...state, orders: action.payload };
    case 'SHOP/SET_CATEGORIES':
      return { ...state, categories: action.payload };
    case 'SHOP/SET_FILTERS':
      return { ...state, filters: action.payload };
    case 'SHOP/SET_SEARCH':
      return { ...state, search: action.payload };
    case 'SHOP/SET_SORT_BY':
      return { ...state, sortBy: action.payload };
    case 'SHOP/SET_SORT_ORDER':
      return { ...state, sortOrder: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  ProjectManager: ProductReducer,
  SHOP: shopReducer,
  cartManager: CartReducer,
  loginManager: loginReducer,
  adminManager: adminReducer,
  userManager: UserReducer,
});

const composeEnhancers = compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

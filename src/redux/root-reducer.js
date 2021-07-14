import {combineReducers } from 'redux'
import userReducer from './user/user.reducer'
import wishListReducer from './wishlist/wishlist.reducer'

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['wishlist']
  };
  
  const rootReducer = combineReducers({
    user: userReducer,
    wishlist: wishListReducer,
})

export default persistReducer(persistConfig, rootReducer);
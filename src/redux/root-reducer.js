import {combineReducers } from 'redux'
import userReducer from './user/user.reducer'
import wishListReducer from './wishlist/wishlist.reducer'


export default combineReducers({
    user: userReducer,
    wishlist: wishListReducer,
})


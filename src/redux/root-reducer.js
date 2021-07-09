import {combineReducers } from 'redux'
import userReducer from './user/user.reducer'
import gamesReducer from './games/games.reducer'
//import { persistReducer } from 'redux-persist';
//import storage from 'redux-persist/lib/storage';
/*
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
  };
*///const rootReducer =
export default combineReducers({
    user: userReducer,
    //games: gamesReducer,
})

//export default persistReducer(persistConfig, rootReducer);
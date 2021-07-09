import { createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
//import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer'

// o  middlewarer logger será útil para debuggar, 
// já que irá printar o que está acontecendo
const middlewarers = [logger] 

export const store = createStore(rootReducer, applyMiddleware(...middlewarers))

//export const persistor = persistStore(store);

export default {store};
import {createStore,applyMiddleware, compose} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
import logger from 'redux-logger'
import combinereducer from './rootReducer'

const persistConfig = {
    key: 'root',
    storage,
  }
const persistedReducer = persistReducer(persistConfig, combinereducer)
const store = createStore(
    persistedReducer,
    {}, 
    compose(
        applyMiddleware(logger),
         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
   )
const persistor = persistStore(store)
export default store
export {persistor}
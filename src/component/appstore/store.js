import {createStore} from 'redux'
import combinereducer from './rootReducer'


const store = createStore(combinereducer,{}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store
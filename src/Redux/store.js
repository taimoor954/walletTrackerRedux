import {createStore, applyMiddleware} from 'redux'
import rootReducer from './rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension'
var middleware = []
var store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))
export default store
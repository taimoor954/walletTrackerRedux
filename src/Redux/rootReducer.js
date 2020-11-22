import {combineReducers} from 'redux' 
import walletReducer from './WalletTracker/walletReducer'


var rootReducer = combineReducers({
    transactions : walletReducer
})
export default rootReducer
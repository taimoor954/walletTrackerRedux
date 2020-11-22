import { ADD_TRANSACTION, DELETE_TRANSACTION, UPDATE_TRANSACTION } from './constants';
var initalState = []

const walletReducer = (state=initalState, action) => {
var {payload, type}= action
switch (type) {
    case ADD_TRANSACTION:
    return [...state, payload.transactionObject]        
    case DELETE_TRANSACTION:
        return state.filter((trans) => 
        trans.id !== payload.transactionObjectId
            )
    case UPDATE_TRANSACTION : 
    return state.map((trans)=>{
        if(trans.id==payload.transactionObjectId)
        {
         return {
            ...trans,
            ...payload.updatedTransactionObject
                }

                
        }
        else{
            return{

                ...trans
            }
        }
    
    })  
    
     
         
    default:
       return state
}

}
export default walletReducer 
import {
    ADD_TRANSACTION,
    DELETE_TRANSACTION
} from './constants';

export var addTransaction = (transactionObject) => {
    return {
        type: ADD_TRANSACTION,
        payload: {
            transactionObject: transactionObject
        }
    }
}

export var deleteTransaction = (transactionObjectId) => {
    return {
        type: DELETE_TRANSACTION,
        payload: {
             transactionObjectId
        }
    }

}

export var updateTransaction = (transactionObjectId, updatedTransactionObject) => {
    return {
        type: DELETE_TRANSACTION,
        payload: {
             transactionObjectId, 
             updatedTransactionObject
        }
    }

}


import React from 'react'
import Form from '../../Components/Form/form'
import {connect} from 'react-redux'
const edit = ({transaction}) => {
console.log(transaction)
    return (
        <div>
            <Form description = {transaction.description} amount={transaction.amount} transactionType={transaction.transactionType}/>       

        </div>

    )
}
 //form may set karana hai
            

var mapState = (store, {match : {params : {id}}}) => { 
    //ek element chaiya tou find 
return {transaction : store.transactions.find((transaction) => {
     return transaction.id == id
})}

}
export default connect(mapState)(edit)

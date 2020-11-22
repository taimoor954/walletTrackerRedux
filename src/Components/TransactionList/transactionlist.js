import React from 'react'
import {connect} from 'react-redux'
import TransCard from './../TransactionCard/transCard';

const transactionlist = (props) => {
    // console.log(props.transactions)
    
    return (
        <div>
           {props.transactions.map((transaction) => <TransCard transaction={transaction} key={transaction.id}/> )} 
        </div>
    )
}

var mapState = (store) => {
return {
    transactions : store.transactions
}
}

export default connect(mapState)(transactionlist)

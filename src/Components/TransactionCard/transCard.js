import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {deleteTransaction} from '../../Redux/WalletTracker/action'
import './transCard.css'
const transCard = (props) => {
    // console.log(props)
    var {transaction:{description, amount, transactionType, id}, deleteTransaction} = props
    return (
        <div className='transCardRow'>
            <div className='descriptionRow flex'><h1>{description}</h1></div>
            <div className='amountRow flex'><h1>{amount}</h1></div>
            <div className='transactionTypeRow flex'><h1>{transactionType}</h1></div>
            <div className='EditRow flex'><Link to={`/transaction/${id}`}><button className='formInputButton'>Edit</button></Link></div>
            <div className='DeleteRow flex'><button onClick={(e) => deleteTransaction(id)}   className='formInputButton'>Delete</button></div>
        </div>
    )
}

var action = {
    deleteTransaction
}
export default connect(null, action)(transCard)

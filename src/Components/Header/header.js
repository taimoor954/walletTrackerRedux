import React from 'react'
import {connect} from 'react-redux'
import { amountCalculation } from './utilityFunctions';
import './header.css'
const header = ({grossAmount}) => {
    // var {transaction:{ amount} } = props
    return (
        <div className="Header">
            <div className="logoCol"><h1>Logo</h1></div>
            <div className="AmountCol"><h1>{grossAmount}</h1></div>
        </div>
    )
}
var mapState =(store) => {
    return {
        grossAmount : amountCalculation(store.transactions) 
       }
}
export default connect(mapState)(header)

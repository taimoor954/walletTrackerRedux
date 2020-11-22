import React from 'react'
import {connect} from 'react-redux'
import { v4 as uuid } from 'uuid';
import { addTransaction, updateTransaction } from './../../Redux/WalletTracker/action';
import './form.css'
import {withRouter} from 'react-router-dom'

class form extends React.Component {
    
    state = {
        description:this.props.match.params.id  ? this.props.description : "" ,
        amount : this.props.match.params.id   ? this.props.amount : "",
        transactionType : this.props.match.params.id  ? this.props.transactionType : "Income",
       
    }

    handleFormInput = (e) => {
        var {name, value} = e.target
        this.setState({
            [name] : value  //dynamic key computation. Jaha jaha name hoga waha waha value dal dengay
        })
    }


    formSubmit = (e) => {
    console.log(this.props)
    e.preventDefault()    
    // console.log(this.props.match.params.id)
    if(this.props.match.params.id)
    {
        console.log('updatedWorking')
        console.log(this.state)
        updateTransaction(this.props.match.params.id, this.state)
        //update
        //id form say laiengay 
        var {match : {params : {id}}} = this.props
        console.log(this.props)
        // updateTransaction(id , this.state)
    
    }
    else
    {
    //add
    var transactionObject = {
    ...this.state, //state ki sari value lay ao or object may daldo
    amount : parseInt(this.state.amount), //amount ko explicitly convert karo int may
    id : uuid()
    }
    this.props.addTransaction(transactionObject)

    }
    
}





    render = () => {
    
    return (
        <div className='FormRow'>
            <form onSubmit={this.formSubmit}>
             <div className='FormFields' >
             <div className='descriptionRow flex'><input className='formInput' name='description' onChange={this.handleFormInput}  placeholder='description' value={this.state.description} ></input></div>
             <div className='amountRow flex'><input className='formInput' name='amount' onChange={this.handleFormInput} placeholder='amount' value={this.state.amount}></input></div>
             <div className='transTypeRow flex'><select className='formInput' name='transactionType'  onChange={this.handleFormInput} value={this.state.transactionType}>
                    <option>Income</option>
                    <option>Expense</option>
                </select>
                </div>  
              {this.props.match.params.id ?  <div className='buttonAdd flex'><button onClick={this.formSubmit} className='formInputButton'>Update</button></div> : <div className='buttonAdd flex'><button className='formInputButton'>Add</button></div>  } 
              </div> 
                
            </form>
        </div>
    )

}
}

var action = {
addTransaction,
updateTransaction
}

export default (connect(null, action)(withRouter(form)))

export var amountCalculation = (transactions) => {
    var sum=0
    for(var transaction of transactions)
    {
        var {transactionType, amount} = transaction
        if(transactionType =='Income') 
        {
         sum = sum + amount 
        }
        else 
        {
            sum -= amount
        }
    }
    return sum
}
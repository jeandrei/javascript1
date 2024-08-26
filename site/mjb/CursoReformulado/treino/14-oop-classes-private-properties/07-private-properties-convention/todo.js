/**
 * Encapsulation - process of hiden data, methods and properties of a class
 * In javascript we don't have private properties was is implemented in ES2022 but not all browsers suport
 * but the standard way to declare a private property is by putting an underscore in front of it
 * like _firstName
 * 
 * So as an example
 * 
 * create a class Wallet with a private balance set to zero and an private array transactions set to [] all
 * 
 * now first let's create a private method processDeposit(amount)
 * simple console log Depositing value and push to the transection array an object type: 'deposit' and the amount
 * 
 * now create a public method deposit 
 * processDeposit and then set the private balanc to balance + amount
 * 
 * now create a private processWidthdraw that will do the same as processDeposit but it will 
 * console log Withdrawing value and push to transaction type withdraw and the amount
 * now create a public method withdraw(amount) that will processWithdraw and update balance - amount
 * avoid withdraw more than the balance show a message in the console Not enough funds
 * 
 * then create a get balance and a get transactions
 * 
 * now create a new wallet
 * deposit 300
 * withdraw 50
 * console.log(wallet.balance)
 * console.log(wallet.transactions)
 * 
 */
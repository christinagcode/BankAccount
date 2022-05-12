//BankAccount class - This class represents a bank account.
//accountNumber - String representing the account number
//owner - String representing the owner of the account
//transactions - An array of transactions representing the history of all transactions associated with this account



class BankAccount {
    accountNumber;
    owner;
    transactions;

    //The constructor should take in the following input:
    //accountNumber - The account Number
    //owner - The name of the person who owns this account

    constructor(accountNumber, owner) {
        this.accountNumber = accountNumber;
        this.owner = user;
        this.transaction = []
    }

    //The class should have the following 3 methods:
    //balance() - This method does not take any input, and returns the current balance on the account. The balance is computed by summing up the amounts in the transactions array
    balance() {
        let bal = 0;
        for(let i = 0; this.transactions.length; i++) {
            bal += this.transaction[i].amount;
        }
    };

    //deposit(amt) - This method takes in a single input, the deposit amount. This method should create a new transaction representing the deposit, and add it to the transactions array.

    depositMoney(amount) {
        if (amount > 0) {
            let deposit = new this.transactions(amount, 'Desposit');
            this.transactions.push(deposit);
        }

        //charge(payee, amt) - This method takes in the payee and amount, creates a new transaction with the payee and amount, and adds the transaction to the transaction array.

    chargeMoney(payee, amount){
        let Balance = this.balance();

        if(amount > Balance) {
            return
        } else {
            let charge = new Tranasactions(-1 * amount, payee);
            this.transactions.push(charge);
        }

    }


    }
}

//The class should have the following fields:
//date - The date of the transaction
//amount - The amount of the transaction. Positive amounts are money going into the account (deposit, refund). Negative amounts are money coming out of the account (a charge or debit).
//payee - The description or payee on the transaction

class Transactions {
    amount;
    payee;
    date;

    //The constructor should take in the following input:
//amount - The amount on the transaction
//payee - The payee or description on the transaction


    constructor(amount, payee) {
        this.amount = amount
        this.payee = payee
        this.date = new Date();ß
    }
}
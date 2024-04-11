class Account {
    constructor(accountNumber, balance = 0) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount} into account ${this.accountNumber}.`);
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from account ${this.accountNumber}.`);
        } else {
            console.log("Insufficient funds or invalid withdrawal amount.");
        }
    }

    transfer(amount, recipientAccount) {
        if (amount > 0 && this.balance >= amount) {
            this.balance -= amount;
            recipientAccount.balance += amount;
            console.log(`Transferred ${amount} from account ${this.accountNumber} to account ${recipientAccount.accountNumber}.`);
        } else {
            console.log("Insufficient funds or invalid transfer amount.");
        }
    }

    checkBalance() {
        console.log(`Account ${this.accountNumber} balance: ${this.balance}`);
    }
}

class BankingService {
    constructor() {
        this.accounts = new Map();
    }

    createAccount(accountNumber, initialDeposit) {
        if (this.accounts.has(accountNumber)) {
            console.log("Account already exists.");
        } else {
            const newAccount = new Account(accountNumber, initialDeposit);
            this.accounts.set(accountNumber, newAccount);
            console.log(`Account ${accountNumber} created with initial deposit ${initialDeposit}.`);
        }
    }

    getAccount(accountNumber) {
        if (this.accounts.has(accountNumber)) {
            return this.accounts.get(accountNumber);
        } else {
            console.log("Account not found.");
            return null;
        }
    }
}

const bank = new BankingService();

bank.createAccount("5123-7213-7331-4123", 1000); 
bank.createAccount("8531-6342-1234-6233", 500); 

const account1 = bank.getAccount("5123-7213-7331-4123");
const account2 = bank.getAccount("8531-6342-1234-6233");

if (account1 && account2) {
    account1.deposit(500); 
    account1.withdraw(200); 
    account1.transfer(300, account2); 

    account1.checkBalance(); 
    account2.checkBalance(); 
}

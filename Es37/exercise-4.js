class BankAccount{
    #balance;
    constructor(balance){
        this.#balance=balance;
    }
    deposit(money){
        this.#balance+=money;
    }
    withdraw(money){
        this.#balance-=money;
    }
    view(){
        console.log(this.#balance);
    }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();
class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    try{
      if(amount>0){
        console.log('Deposited ' + amount);
        this.#amount += amount;
      }
      else throw 'The amount provided cannot be negative '
    }
    catch(err){
      console.error(err);
    }
  }

  withdraw(amount) {
    try{
      if(amount<=0) throw 'The amount provided cannot be negative ';
      else if(amount>this.#amount) throw 'You cannot withdraw more than account balance';
      else {
        console.log('Withdrawed ' + amount);
        this.#amount -= amount;
      }
    }
    catch(err){
      console.error(err);
    }
  }

  view() {
    console.log(this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();
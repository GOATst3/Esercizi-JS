class BankAccount {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(balance) {
    this.#balance += balance;
  }

  withdraw(balance) {
    this.#balance -= balance;
  }

  view() {
    console.log(this.#balance);
  }
  get balance(){
    return this.#balance;
  }
}

class BankAccountVip extends BankAccount{
  constructor(initialBalance){
    super(initialBalance);
  }

  earn(){
    super.balance>=1000?super.deposit(super.balance*0.03):console.log("you're too poor to get interest of 3%");
  }
}

const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(500);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500);
bankAccountVip.earn();
bankAccountVip.view();
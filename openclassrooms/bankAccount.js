class BankAccount {
  constructor(owner, balance) {
    this.owner = owner; // dentifier le propriétaire du compte
    this.balance = balance; // connaître le montant disponible sur le compte
  }
  showBalance() {
    console.log(`Your balance is ${this.balance} dollar`);
  }
  deposit(amount) {
    console.log(`you deposited ${amount} dollar`);
    this.balance += amount;
    this.showBalance();
  }
  withdraw(amount) {
    if (amount > this.balance) {
      console.log(`your withdraw is refuse !`);
    } else {
      console.log(`you withdraw ${amount} dollar`);
      this.balance -= amount;
      this.showBalance();
    }
  }
}

const newAccount = new BankAccount('Tracy', 42000);
console.log(newAccount.showBalance());

/**
 * deposit()  (dépôt) 存入
 * withdraw()  (retrait) 提領
 * amount  (montant) 金額
 */

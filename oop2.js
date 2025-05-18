// class Account {
//   constructor(openingBalance) {
//     this.balance = openingBalance;
//   }
//   getBalance() {
//     return this.balance;
//   }
//   deposit(depositAmount) {
//     return (this.balance = this.balance + depositAmount);
//   }
//   withdraw(withdrawAmount) {
//     if (this.balance >= withdrawAmount) {
//       return (this.balance -= withdrawAmount);
//     } else {
//       console.log("Your Account Balance is Not sufficient");
//     }
//   }
// }

// // Account 01
// const safaAccount = new Account(1000);
// safaAccount.deposit(5000);
// safaAccount.withdraw(2000);
// console.log(safaAccount.getBalance());
// // Account 02
// const sabaAccount = new Account(1000);
// sabaAccount.deposit(500);
// sabaAccount.withdraw(2000);
// console.log(sabaAccount.getBalance());
// // Account 03
// const suraiyaAccount = new Account(1000);
// suraiyaAccount.deposit(7000);
// suraiyaAccount.withdraw(2000);
// console.log(suraiyaAccount.getBalance());
// // Account 04
// const shelaAccount = new Account(1000);
// shelaAccount.deposit(6000);
// shelaAccount.withdraw(7000);
// console.log(shelaAccount.getBalance());

class Account {
  constructor(openingBalance) {
    this.balance = openingBalance;
    this.minimumBalance = 500;
  }
  getBalance() {
    return this.balance;
  }
  deposit(depositAmount) {
    this.balance = this.balance + depositAmount;
  }
  withdraw(withdrawAmount) {
    if (withdrawAmount <= this.balance) {
      if (this.balance - withdrawAmount < this.minimumBalance) {
        console.log(
          `You can not withdraw ${withdrawAmount} $ in this amount. Your Account Balance is ${this.balance} $ Not sufficient. You have keep minimum balance amount of ${this.minimumBalance} $.`
        );
      } else {
        this.balance -= withdrawAmount;
      }
    }
  }
}

// Account 01
const safaAccount = new Account(500);
safaAccount.deposit(1000);
safaAccount.withdraw(1100);
console.log(safaAccount.getBalance());
// Account 02
const sabaAccount = new Account(1000);
sabaAccount.deposit(500);
sabaAccount.withdraw(2000);
console.log(sabaAccount.getBalance());
// Account 03
const suraiyaAccount = new Account(1000);
suraiyaAccount.deposit(7000);
suraiyaAccount.withdraw(2000);
console.log(suraiyaAccount.getBalance());
// Account 04
const shelaAccount = new Account(1000);
shelaAccount.deposit(6000);
shelaAccount.withdraw(6600);
console.log(shelaAccount.getBalance());

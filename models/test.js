const accountApi = require('./accounts.js')

let testAcc = accountApi.createAccount()

accountApi.addAccount(testAcc)

console.log(accountApi.getAccounts())
console.log(accountApi.getAccountByName('checking'))

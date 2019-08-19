//list of bank accounts
global.accounts = []

const createAccount = () => {
  return {
    name: "checking",
    open: true,
    amount: 100
  }
}

//we create the variable account here, but the controller
//will be what finds the value to inside the function, in this instance 
//it is an object that represents an account

const addAccount = (account) => {  
  global.accounts.push(account)
}

const getAccounts = () => {
  return global.accounts
}

//gets the matching account then index 0 because name is
//the first entry
//var matching accounts will return all accounts in the array, while 0
//index will just return the first entry

const getAccountByName = (name) => {
  let matchingAccounts = global.accounts.filter(account => account.name === name)

  if(matchingAccounts.length < 1)
    return null

  return matchingAccounts[0]
}

const getAccountIndexAtName = (name) => {
  //get index of account with name that matches name
  return global.accounts.findIndex(acc => acc.name === name);
}

const updateAccountAtName = (name, account) => {
  let i = getAccountIndexAtName(name)

  if(i < 0)
    return

  global.accounts[i] = account
}

const deleteAccountAtName = (name) => {
  let i = getAccountIndexAtName(name)

  if(i < 0)
    return
   
  global.accounts.splice(i, 1)
}

module.exports = {
  addAccount,
  createAccount,
  deleteAccountAtName,
  getAccountByName,
  getAccounts,
  updateAccountAtName,
}

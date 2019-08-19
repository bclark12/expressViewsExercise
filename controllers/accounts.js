const accountApi = require('../models/accounts.js')
const express = require('express')

const accountRouter = express.Router()

accountRouter.get('/new', (req, res) => {
  res.send(accountApi.createAccount())
})

//TODO: write a get handler for getAccounts
accountRouter.get('/', (req, res) => {
  res.send(accountApi.getAccounts())
})

//TODO: write a get handler for getAccountByName
//use url params /accounts/:name to pass in the 
//name of the account we want to get 
//via the http request
accountRouter.get('/:name', (req, res) => {
  //let account = accountApi.getAccountByName(req.params.name)
  //res.send(account)
  res.send(accountApi.getAccountByName(req.params.name))
})

//OPTIONAL
//write a post handler for addAccount
accountRouter.post('/', (req, res) => {

  accountApi.addAccount(req.body)

  res.send(200)
})


accountRouter.put('/:name', (req, res) => {
  accountApi.updateAccountAtName(req.params.name, req.body)

  res.send(200)
})

accountRouter.delete('/:name', (req, res) => {
  accountApi.deleteAccountAtName(req.params.name)

  res.send(200)
})

module.exports = {
  accountRouter
}

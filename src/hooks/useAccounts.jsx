import { useEffect, useState } from 'react'

import { useUser } from './useUser.jsx'

import {
  createAccount as createAccountService,
  getAccounts as getAccountsService,
  deleteAccount as deleteAccountService,
  updateAccount as updateAccountService
} from '../services/accountsServices.js'

export function useAccounts () {
  const { user } = useUser()
  const [accounts, setAccounts] = useState([])

  useEffect(() => {
    getAccountsService(user, {})
      .then(accounts => {
        setAccounts(accounts)
      })
  }, [user])

  useEffect(() => {
    console.log(accounts)
  }, [accounts])

  const createAccount = (account) => {
    return new Promise((resolve, reject) =>
      createAccountService(user, account)
        .then(() => {
          setAccounts((accounts) => [...JSON.parse(JSON.stringify(accounts)), account])
          resolve()
        })
        .catch(reject)
    )
  }

  const removeAccount = (id) => {
    return new Promise((resolve, reject) => {
      deleteAccountService(user, id)
        .then(() => {
          setAccounts(() => {
            return [...JSON.parse(JSON.stringify(accounts))].filter(a => a.id !== id)
          })
          resolve()
        })
        .catch(reject)
    })
  }

  const updateAccount = (id, account) => {
    return new Promise((resolve, reject) => {
      updateAccountService(user, { id, ...account })
        .then(() => {
          setAccounts(() => {
            return JSON.parse(JSON.stringify(accounts)).map(a => a.id === id ? account : a)
          })
          resolve()
        })
        .catch(reject)
    })
  }

  return { accounts, createAccount, removeAccount, updateAccount }
}

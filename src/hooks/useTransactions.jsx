import { useEffect, useState } from 'react'

import { useUser } from './useUser.jsx'

import {
  createTransaction as createTransactionService,
  getTransactions as getTransactionsService,
  deleteTransaction as deleteTransactionService,
  updateTransaction as updateTransactionService
} from '../services/transactionServices.js'

export function useTransactions () {
  const { user } = useUser()
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    getTransactionsService(user, {})
      .then(transactions => {
        setTransactions(transactions)
      })
  }, [user])

  useEffect(() => {
    console.log(transactions)
  }, [transactions])

  const createTransaction = (transaction) => {
    return new Promise((resolve, reject) =>
      createTransactionService(user, transaction)
        .then(() => {
          setTransactions((transactions) => [...JSON.parse(JSON.stringify(transactions)), transaction])
          resolve()
        })
        .catch(reject)
    )
  }

  const removeTransaction = (id) => {
    return new Promise((resolve, reject) => {
      deleteTransactionService(user, id)
        .then(() => {
          setTransactions(() => {
            return [...JSON.parse(JSON.stringify(transactions))].filter(a => a.id !== id)
          })
          resolve()
        })
        .catch(reject)
    })
  }

  const updateTransaction = (id, transaction) => {
    return new Promise((resolve, reject) => {
      updateTransactionService(user, { id, ...transaction })
        .then(() => {
          setTransactions(() => {
            return JSON.parse(JSON.stringify(transactions)).map(a => a.id === id ? transaction : a)
          })
          resolve()
        })
        .catch(reject)
    })
  }

  return { transactions, createTransaction, removeTransaction, updateTransaction }
}

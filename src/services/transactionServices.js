import { getUrlParamsFromObj } from '../utils/utils.js'

const transactionEndpoint = import.meta.env.VITE_ENDPOINT_BASE + '/transaction'
const transactionsEndpoint = import.meta.env.VITE_ENDPOINT_BASE + '/transactions'

export const createTransaction = (user, {
  accountId,
  currencyId,
  description,
  type,
  amount,
  date,
  categories
}) => {
  return new Promise((resolve, reject) => {
    fetch(transactionEndpoint, {
      method: 'POST',
      headers: new Headers({
        Authorization: user,
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        accountId,
        currencyId,
        description,
        type,
        amount,
        date,
        categories
      })
    })
      .then(res => {
        if (res.status !== 200) {
          throw new Error('Status not 200')
        }
        return res.json()
      })
      .then(resolve)
      .catch(err => {
        console.error(err)
        reject(err)
      })
  })
}

export const getTransactions = (user, {
  accountId,
  categoryId,
  currencyId,
  type,
  amountFrom,
  amountTo,
  dateFrom,
  dateTo
}) => {
  const paramsStr = getUrlParamsFromObj({
    accountId,
    categoryId,
    currencyId,
    type,
    amountFrom,
    amountTo,
    dateFrom,
    dateTo
  })

  return new Promise((resolve, reject) => {
    fetch(`${transactionsEndpoint}${paramsStr}`, {
      headers: new Headers({
        Authorization: user
      })
    })
      .then(res => {
        if (res.status !== 200) {
          throw new Error('Status not 200')
        }
        return res.json()
      })
      .then(resolve)
      .catch(err => {
        console.error(err)
        reject(err)
      })
  })
}

export const getTransaction = (user, id) => {
  return new Promise((resolve, reject) => {
    fetch(`${transactionEndpoint}?id=${id}`, {
      headers: new Headers({
        Authorization: user
      })
    })
      .then(res => {
        if (res.status !== 200) {
          throw new Error('Status not 200')
        }
        return res.json()
      })
      .then(resolve)
      .catch(err => {
        console.error(err)
        reject(err)
      })
  })
}

export const deleteTransaction = (user, id) => {
  return new Promise((resolve, reject) => {
    fetch(transactionEndpoint, {
      method: 'DELETE',
      headers: new Headers({
        Authorization: user,
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        id
      })
    })
      .then(res => {
        if (res.status !== 200) {
          throw new Error('Status not 200')
        }
        return res.json()
      })
      .then(resolve)
      .catch(err => {
        console.error(err)
        reject(err)
      })
  })
}

export const updateTransaction = (user, { id, accountId, categories, currencyId, description, type, amount, date }) => {
  return new Promise((resolve, reject) => {
    fetch(transactionEndpoint, {
      method: 'PUT',
      headers: new Headers({
        Authorization: user,
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        id,
        accountId,
        categories,
        currencyId,
        description,
        type,
        amount,
        date
      })
    })
      .then(res => {
        if (res.status !== 200) {
          throw new Error('Status not 200')
        }
        return res.json()
      })
      .then(resolve)
      .catch(err => {
        console.error(err)
        reject(err)
      })
  })
}

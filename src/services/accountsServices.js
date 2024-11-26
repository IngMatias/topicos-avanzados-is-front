
const accountEndpoint = import.meta.env.VITE_ENDPOINT_BASE + '/account'
const accountsEndpoint = import.meta.env.VITE_ENDPOINT_BASE + '/accounts'

export const createAccount = (user, { currencyId, accountNumber, description, amount }) => {
  return new Promise((resolve, reject) => {
    fetch(accountEndpoint, {
      method: 'POST',
      headers: new Headers({
          Authorization: user,
          'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        currencyId,
        accountNumber,
        description,
        amount
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

export const getAccounts = (user, { currencyId, accountNumberStartsWith }) => {
  
  let accountsEndpointWithParams = `${accountsEndpoint}`
  if (currencyId || accountNumberStartsWith) {
    accountsEndpointWithParams += `?`
  }
  if (currencyId) {
    accountsEndpointWithParams += `currencyId=${currencyId}`
  }
  if (currencyId && accountNumberStartsWith) {
    accountsEndpointWithParams += `&`
  }
  if (accountNumberStartsWith) {
    accountsEndpointWithParams += `accountNumberStartsWith=${accountNumberStartsWith}`
  }
  
  return new Promise((resolve, reject) => {
    fetch(accountsEndpointWithParams, {
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

export const getAccount = (user, id) => {
  return new Promise((resolve, reject) => {
    fetch(`${accountEndpoint}?id=${id}`, {
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

export const deleteAccount = (user, id) => {
  return new Promise((resolve, reject) => {
    fetch(accountEndpoint, {
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

export const updateAccount = (user, { id, accountNumber, description, amount }) => {
  return new Promise((resolve, reject) => {
    fetch(accountEndpoint, {
      method: 'PUT',
      headers: new Headers({
          Authorization: user,
          'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        id,
        accountNumber,
        description,
        amount
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
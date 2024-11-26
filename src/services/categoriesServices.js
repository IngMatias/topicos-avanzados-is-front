import { getUrlParamsFromObj } from '../utils/utils.js'

const categoryEndpoint = import.meta.env.VITE_ENDPOINT_BASE + '/category'
const categoriesEndpoint = import.meta.env.VITE_ENDPOINT_BASE + '/categories'

export const createCategory = (user, {
  transactionId,
  description
}) => {
  return new Promise((resolve, reject) => {
    fetch(categoryEndpoint, {
      method: 'POST',
      headers: new Headers({
        Authorization: user,
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        transactionId,
        description
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

export const getCategories = (user) => {
  const paramsStr = getUrlParamsFromObj({
  })

  return new Promise((resolve, reject) => {
    fetch(`${categoriesEndpoint}${paramsStr}`, {
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

export const getCategory = (user, id) => {
  return new Promise((resolve, reject) => {
    fetch(`${categoryEndpoint}?id=${id}`, {
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

export const deleteCategory = (user, id) => {
  return new Promise((resolve, reject) => {
    fetch(categoryEndpoint, {
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

export const updateCategory = (user, { id, description }) => {
  return new Promise((resolve, reject) => {
    fetch(categoryEndpoint, {
      method: 'PUT',
      headers: new Headers({
        Authorization: user,
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        id,
        description
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

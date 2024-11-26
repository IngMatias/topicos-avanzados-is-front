const currencyEndpoint = import.meta.env.VITE_ENDPOINT_BASE + '/currency'
const currenciesEndpoint = import.meta.env.VITE_ENDPOINT_BASE + '/currencies'

function capitalizeWords (text) {
  return text
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase())
}

export const getCurrencies = () => {
  return new Promise((resolve, reject) => {
    fetch(currenciesEndpoint)
      .then(res => {
        if (res.status !== 200) {
          throw new Error('Status not 200')
        }
        return res.json()
      })
      .then(currencies => {
        resolve(currencies.map(({ id, name, createdAt, updatedAt }) => {
          return { id, name: capitalizeWords(name), createdAt, updatedAt }
        }))
      })
      .catch(err => {
        console.error(err)
        reject(err)
      })
  })
}

const healthEndpoint = import.meta.env.VITE_ENDPOINT_BASE + '/health'

const health = {
  OK: 'OK',
  NOTOK: 'NOT OK'
}

export const getHealth = async () => {
  return new Promise((resolve, reject) => fetch(healthEndpoint)
    .then(res => {
      if (res.status !== 200) {
        throw new Error('Status not 200')
      }
      return res.text()
    })
    .then(_ => resolve(health.OK))
    .catch(err => {
      console.error(err)
      reject(health.NOTOK)
    }))
}

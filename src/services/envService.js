const envEndpoint = import.meta.env.VITE_ENDPOINT_BASE + '/env'

const env = {
  NONE: 'NONE',
  DEV: 'DEV',
  PROD: 'PROD'
}

export const getEnv = async () => {
  return new Promise((resolve, reject) => fetch(envEndpoint)
    .then(res => {
      if (res.status !== 200) {
        throw new Error('Status not 200')
      }
      return res.text()
    })
    .then(data => resolve(env[data]))
    .catch(err => {
      console.error(err)
      reject(env.NONE)
    }))
}

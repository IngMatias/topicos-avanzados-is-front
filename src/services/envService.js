const envEndpoint = import.meta.env.VITE_ENDPOINT_BASE + '/env'

const env = {
  DEV: 'DEV',
  PRODU: 'PRODU'
}

export const getEnv = async () => {
  return fetch(envEndpoint)
    .then(res => {
      if (res.status !== 200) {
        throw new Error('Status not 200')
      }
      return res.text()
    })
    .then(data => env[data])
    .catch(err => {
      console.error(err)
      return ''
    })
}

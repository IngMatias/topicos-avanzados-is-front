import { useEffect, useState } from 'react'

import { getEnv } from '../services/envService.js'

export function useEnvHook () {
  const [env, setEnv] = useState('')

  useEffect(() => {
    getEnv()
      .then(env => setEnv(env))
  })

  return { env }
}

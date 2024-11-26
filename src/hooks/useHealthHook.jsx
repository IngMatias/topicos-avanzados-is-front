import { useEffect, useState } from 'react'

import { getHealth } from '../services/healthServices.js'

export function useHealthHook () {
  const [health, setHealth] = useState('')

  useEffect(() => {
    getHealth()
      .then(health => setHealth(health))
      .catch(health => setHealth(health))
  }, [])

  return { health }
}

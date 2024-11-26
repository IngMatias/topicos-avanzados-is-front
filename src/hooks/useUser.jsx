import { useEffect, useState } from 'react'

export function useUser () {
  const [user, setUser] = useState('')

  useEffect(() => {
    setUser('22ea2fda-4113-4e13-916d-1f0de6361164')
  }, [])

  return { user }
}

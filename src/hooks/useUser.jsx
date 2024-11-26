import { useEffect, useState } from 'react'

export function useUser () {
  const [user, setUser] = useState('')

  useEffect(() => {
    setUser('3379038a-c927-4c03-9557-ab47370b006f')
  }, [])

  return { user }
}

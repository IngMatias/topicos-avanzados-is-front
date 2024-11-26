import { useEffect, useState } from 'react'

import { useUser } from './useUser'

import {  
  getAccount as getAccountService,
} from '../services/accountsServices.js'

export function useAccount () {
  const { user } = useUser()
  const [id, setId] = useState('')
  const [account, setAccount] = useState()

  useEffect(() => {
    getAccountService(user, id)
    .then(setAccount)
  }, [id])

  return { setId, account}
}
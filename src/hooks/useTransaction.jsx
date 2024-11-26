import { useEffect, useState } from 'react'

import { useUser } from './useUser.jsx'

import {  
  getTransaction as getTransactionService,
} from '../services/transactionServices.js'

export function useTransaction () {
  const { user } = useUser()
  const [id, setId] = useState('')
  const [transaction, setTransaction] = useState()

  useEffect(() => {
    getTransactionService(user, id)
    .then(setTransaction)
  }, [id])

  return {setId, transaction}
}
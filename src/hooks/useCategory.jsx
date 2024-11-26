import { useEffect, useState } from 'react'

import { useUser } from './useUser.jsx'

import {
  getCategory as getCategoryService
} from '../services/categoriesServices.js'

export function useCategory () {
  const { user } = useUser()
  const [id, setId] = useState('')
  const [category, setCategory] = useState()

  useEffect(() => {
    getCategoryService(user, id)
      .then(setCategory)
  }, [id])

  return { setId, category }
}

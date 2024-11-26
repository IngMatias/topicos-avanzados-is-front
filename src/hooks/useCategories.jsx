import { useEffect, useState } from 'react'

import { useUser } from './useUser.jsx'

import {
  createCategory as createCategoryService,
  getCategories as getCategoriesService,
  deleteCategory as deleteCategoryService,
  updateCategory as updateCategoryService
} from '../services/categoriesServices.js'

export function useCategories () {
  const { user } = useUser()
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategoriesService(user, {})
      .then(categories => {
        setCategories(categories)
      })
  }, [user])

  useEffect(() => {
    console.log(categories)
  }, [categories])

  const createCategory = (category) => {
    return new Promise((resolve, reject) =>
      createCategoryService(user, category)
        .then(() => {
          setCategories((categories) => [...JSON.parse(JSON.stringify(categories)), category])
          resolve()
        })
        .catch(reject)
    )
  }

  const removeCategory = (id) => {
    return new Promise((resolve, reject) => {
      deleteCategoryService(user, id)
        .then(() => {
          setCategories(() => {
            return [...JSON.parse(JSON.stringify(categories))].filter(a => a.id !== id)
          })
          resolve()
        })
        .catch(reject)
    })
  }

  const updateCategory = (id, category) => {
    return new Promise((resolve, reject) => {
      updateCategoryService(user, { id, ...category })
        .then(() => {
          setCategories(() => {
            return JSON.parse(JSON.stringify(categories)).map(a => a.id === id ? category : a)
          })
          resolve()
        })
        .catch(reject)
    })
  }

  return { categories, createCategory, removeCategory, updateCategory }
}

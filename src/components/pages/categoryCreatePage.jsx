import React from 'react'

import { useNavigate } from '../../hooks/useNavigate'

import { getDataFromForm } from '../../utils/utils'
import { useCategories } from '../../hooks/useCategories'

export default function CategoryCreatePage () {
  const { navigate } = useNavigate()
  const { createCategory } = useCategories()

  const handleSubmit = (e) => {
    e.preventDefault()

    const category = getDataFromForm(e.target)
    createCategory(category)
      .then(() => {
        navigate('/categories')
      })
  }

  return (
    <div>
      <h1>Crear Categoría</h1>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <label>
          Descripción
          <input name='description' type='text' defaultValue='' />
        </label>
        <button type='submit'>Añadir Categoría</button>
      </form>
    </div>
  )
}

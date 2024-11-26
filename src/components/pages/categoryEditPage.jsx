import React, { useEffect } from 'react'

import { useNavigate } from '../../hooks/useNavigate'

import { useParams } from 'react-router-dom'
import { getDataFromForm } from '../../utils/utils'
import { useCategories } from '../../hooks/useCategories'
import { useCategory } from '../../hooks/useCategory'

export default function CategoryEditPage () {
  const { navigate } = useNavigate()
  const { id } = useParams()

  const { setId, category } = useCategory()
  const { updateCategory } = useCategories()

  useEffect(() => {
    setId(id)
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()

    const category = getDataFromForm(e.target)
    updateCategory(id, category)
      .then(() => {
        navigate('/categories')
      })
  }

  return (
    category &&
      <div>
        <h1>Editar Categoría</h1>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <label>
            Descripción
            <input name='description' type='text' defaultValue={category.description} />
          </label>
          <button type='submit'>Editar Categoría</button>
        </form>
      </div>
  )
}

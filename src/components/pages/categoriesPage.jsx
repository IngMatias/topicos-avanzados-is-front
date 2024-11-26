import React from 'react'

import { useCategories } from '../../hooks/useCategories'
import { useNavigate } from '../../hooks/useNavigate'

export default function CategoriesPage () {
  const { categories, removeCategory } = useCategories()
  const { navigate } = useNavigate()

  const handleCreateCategory = () => {
    navigate('/category/create')
  }

  const handleRemoveCategory = (e) => {
    removeCategory(e.target.dataset.id)
  }

  const handleEditCategory = (e) => {
    navigate(`/category/edit/${e.target.dataset.id}`)
  }

  return (
    <div>
      <h1>Categorías</h1>
      {
        categories.map(c =>
          <li key={c.id} style={{ display: 'flex', gap: '10px' }}>
            <span>{JSON.stringify(c.description)}</span>
            <button onClick={handleEditCategory} data-id={c.id}>Editar</button>
            <button onClick={handleRemoveCategory} data-id={c.id}>Borrar</button>
          </li>
        )
      }
      <button onClick={handleCreateCategory}>Añadir Categoría</button>
    </div>
  )
}

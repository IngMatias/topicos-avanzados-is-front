import React from 'react'
import { useNavigate } from '../../hooks/useNavigate'

export default function HomePage () {
  const { navigate } = useNavigate()

  const redirect = (e) => {
    navigate(e.target.dataset.path)
  }

  return (
    <div>
      <button onClick={redirect} data-path='/accounts'>Cuentas Bancarias</button>
      <button onClick={redirect} data-path='/currencies'>Monedas</button>
      <button onClick={redirect} data-path='/transactions'>Transacciones</button>
      <button onClick={redirect} data-path='/categories'>Categorias</button>
    </div>
  )
}

import React from 'react'

import { useAccounts } from '../../hooks/useAccounts'
import { useNavigate } from '../../hooks/useNavigate'

export default function AccountsPage () {
  const { accounts, removeAccount } = useAccounts()
  const { navigate } = useNavigate()

  const handleCreateAccount = () => {
    navigate('/account/create')
  }

  const handleRemoveAccount = (e) => {
    removeAccount(e.target.dataset.id)
  }

  const handleEditAccount = (e) => {
    navigate(`/account/edit/${e.target.dataset.id}`)
  }

  return (
    <div style={{ display: 'flex', gap: '10px', flexDirection: 'column', justifyContent: 'stretch' }}>
      <h1 style={{ textAlign: 'start' }}>Cuentas</h1>
      <ul style={{ display: 'flex', gap: '10px', flexDirection: 'column', justifyContent: 'center' }}>{
      accounts.map(a =>
        <li key={a.id} style={{ display: 'flex', gap: '10px', flexDirection: 'row', minWidth: '700px', justifyContent: 'space-between', borderWidth: '1px', borderStyle: 'solid', borderColor: '#333333', borderRadius: '10px', padding: '15px' }}>
          <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
            <span>Número de cuenta: {a.accountNumber}</span>
            <span>Moneda: {a.currency.name}</span>
            <span>Descripcion: {a.description}</span>
            <span>Monto actual: {a.total_in - a.total_out}</span>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
            <button onClick={handleEditAccount} data-id={a.id}>Editar</button>
            <button onClick={handleRemoveAccount} data-id={a.id}>Borrar</button>
          </div>
        </li>
      )
      }
      </ul>
      <button onClick={handleCreateAccount}>Añadir Cuenta</button>
    </div>
  )
}

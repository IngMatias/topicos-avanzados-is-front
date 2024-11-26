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
    <div>
      <h1>Accounts</h1>
      {
      accounts.map(a =>
        <li key={a.id} style={{ display: 'flex', gap: '10px' }}>
          <span>{a.accountNumber}</span>
          <span>{a.currency.name}</span>
          <span>{a.description}</span>
          <span>{a.total_in - a.total_out}</span>
          <button onClick={handleEditAccount} data-id={a.id}>Edit</button>
          <button onClick={handleRemoveAccount} data-id={a.id}>Delete</button>
        </li>
      )
    }
      <button onClick={handleCreateAccount}>Add Account</button>
    </div>
  )
}

import React from 'react'

import { useTransactions } from '../../hooks/useTransactions'
import { useNavigate } from '../../hooks/useNavigate'

export default function TransactionsPage () {
  const { transactions, removeTransaction } = useTransactions()
  const { navigate } = useNavigate()

  const handleCreateTransaction = () => {
    navigate('/transaction/create')
  }

  const handleRemoveTransaction = (e) => {
    removeTransaction(e.target.dataset.id)
  }

  const handleEditTransaction = (e) => {
    navigate(`/transaction/edit/${e.target.dataset.id}`)
  }

  return (
    <div>
      <h1>Transactions</h1>
      {
      transactions.map(t =>
        <li key={t.id} style={{ display: 'flex', gap: '10px' }}>
          <button>{t.description}</button>
          <span>{t.amount}</span>
          <span>{t.date}</span>
          <span>{t.currency.name}</span>
          <span>{t.account.accountNumber}</span>
          <span>{t.type}</span> 
          <span>
            <ul>
              {t.categories.map((category) => 
              <li key={category.id}>{category.description}</li>)}
            </ul>
          </span>
          <button onClick={handleEditTransaction} data-id={t.id}>Edit</button>
          <button onClick={handleRemoveTransaction} data-id={t.id}>Delete</button>
        </li>
      )
    }
      <button onClick={handleCreateTransaction}>Add Transaction</button>
    </div>
  )
}

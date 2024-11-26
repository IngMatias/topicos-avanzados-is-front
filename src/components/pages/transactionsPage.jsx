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
    <div style={{ display: 'flex', gap: '10px', flexDirection: 'column', justifyContent: 'stretch' }}>
      <h1 style={{ textAlign: 'start' }}>Transacciones</h1>
      <ul style={{ display: 'flex', gap: '10px', flexDirection: 'column', justifyContent: 'center' }}>{
      transactions.map(t =>
        <li key={t.id} style={{ display: 'flex', gap: '10px', flexDirection: 'row', minWidth: '700px', justifyContent: 'space-between', borderWidth: '1px', borderStyle: 'solid', borderColor: '#333333', borderRadius: '10px', padding: '15px' }}>
          <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
            <span>Descripción: {t.description}</span>
            <span>Monto: {t.amount}</span>
            <span>Fecha: {t.date.substring(0, 10)}</span>
            <span>Moneda: {t.currency.name}</span>
            <span>Número de cuenta: {t.account.accountNumber}</span>
            <span>Tipo: {t.type === 'IN' ? 'Entrada' : 'Salida'}</span>
            <span style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
              Categorías:
              <ul style={{ display: 'flex', gap: '10px', flexDirection: 'row', paddingInlineStart: '0px' }}>
                {t.categories.map((category) =>
                  <li key={category.id} style={{ listStyleType: 'none' }}>{category.description}</li>)}
              </ul>
            </span>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
            <button onClick={handleEditTransaction} data-id={t.id}>Editar</button>
            <button onClick={handleRemoveTransaction} data-id={t.id}>Borrar</button>
          </div>
        </li>
      )
    }
      </ul>
      <button onClick={handleCreateTransaction}>Añadir Transacción</button>
    </div>
  )
}

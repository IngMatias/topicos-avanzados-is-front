import React, { useEffect, useRef, useState,  } from 'react'

import { useCurrencies } from '../../hooks/useCurrencies'
import { useNavigate } from '../../hooks/useNavigate'

import { useParams } from 'react-router-dom'
import { getDataFromForm } from '../../utils/utils'
import { useTransactions } from '../../hooks/useTransactions'
import { useTransaction } from '../../hooks/useTransaction'
import { useAccounts } from '../../hooks/useAccounts'
import { useCategories } from '../../hooks/useCategories'

export default function TransactionEditPage () {
  const { navigate } = useNavigate()
  const { id } = useParams()

  const { setId, transaction } = useTransaction()
  const { updateTransaction } = useTransactions()
  
  const { currencies } = useCurrencies()
  const { accounts } = useAccounts()

  const { categories } = useCategories()

  const categoryRef = useRef(null);
  const [addedCategories, setAddedCategories] = useState([])


  useEffect(() => {
    setId(id)
  }, [id])

  useEffect(() => {
    setAddedCategories(transaction?.categories ? transaction?.categories?.map((cat) => cat.description) : [])
  }, [transaction])

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const transaction = getDataFromForm(e.target)
    updateTransaction(id, {...transaction, categories: addedCategories})
    .then(() => {
      navigate('/transactions')
    })
  }

  const handleAddCategory = () => {
    const newCategory = categoryRef.current.value.trim()
    if ( newCategory && !(addedCategories.includes(newCategory))) {
      setAddedCategories([...addedCategories, newCategory])
      categoryRef.current.value = ''
    }
  }

  return (
    transaction && <div>
      <h1>Editar Transacción</h1>

      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
        <label>
          Número de cuenta
          <select name='accountId' defaultValue={transaction.account.id} required>
            <option disabled value=''>Selecciona una Cuenta</option>
            {
              accounts.map(a => <option key={a.id} value={a.id}>{a.accountNumber}</option>)
            }
          </select>
        </label>

        <label>
          Moneda
          <select name='currencyId' defaultValue={transaction.currency.id} required>
            <option disabled value=''>Selecciona una Moneda</option>
            {
              currencies.map(c => <option key={c.id} value={c.id}>{c.name}</option>)
            }
          </select>
        </label>

        <label>
          Descripcion
          <input name='description' type='text' defaultValue={transaction.description} required />
        </label>

        <label>
          Tipo
          <select name='type' defaultValue={transaction.type} required>
            <option key={'IN'} value={'IN'}>Ingreso</option>
            <option key={'out'} value={'OUT'}>Egreso</option>
          </select>
        </label>

        <label>
          Monto: 
          <input name='amount' type='number' defaultValue={transaction.amount} required/>
        </label>

        <label>
          Fecha: 
          <input name='date' type='date' defaultValue={new Date(transaction.date).toISOString().substring(0,10)} required/>
        </label>

        <div>
          <label>Categoría: </label>
          <input list='suggestions' name="category" type='text' ref={categoryRef}></input>
          <datalist id='suggestions'>
            {categories.map((category, index) => <option key={index}>{category.description}</option>)}
          </datalist>
          <button type="button" onClick={handleAddCategory}>Añadir Categoría</button>
          <ul>
          {addedCategories.map((category, index) => 
            <li key={index}>{category}</li>
          )}
        </ul>
        </div>

        <button type='submit'>Editar Transacción</button>
      </form>
    </div>
  )
}

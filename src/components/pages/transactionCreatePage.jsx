import React, { useEffect, useRef, useState } from 'react'

import { useCurrencies } from '../../hooks/useCurrencies'
import { useAccounts } from '../../hooks/useAccounts'
import { useNavigate } from '../../hooks/useNavigate'

import { getDataFromForm } from '../../utils/utils'
import { useTransactions } from '../../hooks/useTransactions'
import { useCategories } from '../../hooks/useCategories'

export default function TransactionCreatePage () {
  const { navigate } = useNavigate()
  const { currencies } = useCurrencies()
  const { accounts } = useAccounts()
  const { createTransaction } = useTransactions()

  const { categories } = useCategories()

  const categoryRef = useRef(null);
  const [addedCategories, setAddedCategories] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const transaction = getDataFromForm(e.target)
    console.log('Transaction', transaction)
    createTransaction({...transaction, categories: addedCategories})
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
    <div>
      <h1>Crear Transacción</h1>

      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
        <label>
          Número de cuenta
          <select name='accountId' defaultValue='' required>
            <option disabled value=''>Selecciona una Cuenta</option>
            {
              accounts.map(a => <option key={a.id} value={a.id}>{a.accountNumber}</option>)
            }
          </select>
        </label>

        <label>
          Moneda
          <select name='currencyId' defaultValue='' required>
            <option disabled value=''>Selecciona una Moneda</option>
            {
              currencies.map(c => <option key={c.id} value={c.id}>{c.name}</option>)
            }
          </select>
        </label>

        <label>
          Descripcion
          <input name='description' defaultValue='' type='text' required />
        </label>

        <label>
          Tipo
          <select name='type' defaultValue='' required>
            <option key={'IN'} value={'IN'}>Ingreso</option>
            <option key={'out'} value={'OUT'}>Egreso</option>
          </select>
        </label>
        <label>
          Monto: 
          <input name='amount' type='text' required/>
        </label>

        <label>
          Fecha: 
          <input name='date' type='date' required/>
        </label>

        
        <div>
          <label>Categoría: </label>
          <input list='suggestions' name="category" type='text' ref={categoryRef}></input>
          <datalist id='suggestions'>
            {categories.map((category) => <option>{category.description}</option>)}
          </datalist>
          <button type="button" onClick={handleAddCategory}>Añadir Categoría</button>
          <ul>
          {addedCategories.map((category, index) => 
            <li key={index}>{category}</li>
          )}
        </ul>
        </div>

        <button type='submit'>Añadir Transacción</button>
      </form>
    </div>
  )
}

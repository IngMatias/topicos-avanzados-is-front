import React, { useEffect } from 'react'

import { useCurrencies } from '../../hooks/useCurrencies'
import { useAccounts } from '../../hooks/useAccounts'
import { useNavigate } from '../../hooks/useNavigate'

import { getDataFromForm } from '../../utils/utils'

export default function AccountCreatePage () {
  const { navigate } = useNavigate()
  const { currencies } = useCurrencies()
  const { createAccount } = useAccounts()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const account = getDataFromForm(e.target)
    createAccount(account)
    .then(() => {
      navigate('/accounts')
    })

  }

  return (
    <div>
      <h1>Create Account</h1>

      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
        <label>
          Numero de cuenta
          <input name='accountNumber' type='text' />
        </label>

        <label>
          Moneda
          <select name='currencyId' defaultValue=''>
            <option disabled value=''>Selecciona una Moneda</option>
            {
              currencies.map(c => <option key={c.id} value={c.id}>{c.name}</option>)
            }
          </select>
        </label>

        <label>
          Descripcion
          <input name='description' type='text' />
        </label>

        <label>
          Monto Inicial
          <input name='amount' type='text' />
        </label>

        <button type='submit'>Add Account</button>
      </form>
    </div>
  )
}

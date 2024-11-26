import React, { useEffect, useState } from 'react'

import { useCurrencies } from '../../hooks/useCurrencies'
import { useAccounts } from '../../hooks/useAccounts'
import { useAccount } from '../../hooks/useAccount'
import { useNavigate } from '../../hooks/useNavigate'

import { useParams } from 'react-router-dom'
import { getDataFromForm } from '../../utils/utils'

export default function AccountEditPage () {
  const { navigate } = useNavigate()
  const { id } = useParams()

  const { setId, account } = useAccount()
  const { updateAccount } = useAccounts()
  
  const { currencies } = useCurrencies()


  useEffect(() => {
    setId(id)
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const account = getDataFromForm(e.target)
    updateAccount(id, account)
    .then(() => {
      navigate('/accounts')
    })
  }

  return (
    account && <div>
      <h1>Edit Account</h1>

      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
        <label>
          Numero de cuenta
          <input name='accountNumber' type='text' defaultValue={account.accountNumber} />
        </label>

        <label>
          Moneda
          <select name='currencyId' defaultValue={account.currency.id}>
            <option disabled value=''>Selecciona una Moneda</option>
            {
              currencies.map(c => <option key={c.id} value={c.id}>{c.name}</option>)
            }
          </select>
        </label>

        <label>
          Descripcion
          <input name='description' type='text' defaultValue={account.description}/>
        </label>

        <button type='submit'>Edit Account</button>
      </form>
    </div>
  )
}

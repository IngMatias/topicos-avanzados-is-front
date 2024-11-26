import React from 'react'

import { useCurrencies } from '../../hooks/useCurrencies'
// import { useNavigate } from '../../hooks/useNavigate'

export default function CurrenciesPage () {
  const { currencies } = useCurrencies()
  // const { navigate } = useNavigate()

  /*   const handleClick = () => {
    navigate('/currency/create')
  } */

  return (
    <div>
      <h1>Currencies</h1>
      {
      currencies.map(c =>
        <li key={c.id} style={{ display: 'flex', gap: '10px' }}>
          <button>{JSON.stringify(c.name)}</button>
        </li>
      )
    }
    </div>
  )
}

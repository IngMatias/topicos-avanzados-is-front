import React from 'react'
import { useNavigate } from '../../hooks/useNavigate'

export default function HomePage () {
  const { navigate } = useNavigate()

  const redirect = (e) => {
    navigate(e.target.dataset.path)
  }

  return (
    <ul>
      <li>
        <button onClick={redirect} data-path='/accounts'>Accounts</button>
        <button onClick={redirect} data-path='/currencies'>Currencies</button>
        <button onClick={redirect} data-path='/transactions'>Transactions</button>
      </li>
    </ul>
  )
}

import { useEffect, useState } from 'react'

import { getCurrencies } from '../services/currenciesServices.js'

export function useCurrencies () {
  const [currencies, setCurrencies] = useState([])

  useEffect(() => {
    getCurrencies()
      .then(currencies => setCurrencies(currencies))
  }, [])

  return { currencies }
}

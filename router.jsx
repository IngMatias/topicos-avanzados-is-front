import React from 'react'

import HealthPage from './src/components/pages/healthPage'
import HomePage from './src/components/pages/homePage'

// Account
import AccountsPage from './src/components/pages/accountsPage'
import AccountCreatePage from './src/components/pages/accountCreatePage'
import AccountEditPage from './src/components/pages/accountEditePage'

// Currency
import CurrenciesPage from './src/components/pages/currenciesPage'

// Transaction
import TransactionsPage from './src/components/pages/transactionsPage'
import TransactionCreatePage from './src/components/pages/transactionCreatePage'
import TransactionEditPage from './src/components/pages/transactionEditPage'
import CategoriesPage from './src/components/pages/categoriesPage'
import CategoryEditPage from './src/components/pages/categoryEditPage'
import CategoryCreatePage from './src/components/pages/categoryCreatePage'

export const router = [
  { path: '/health', element: <HealthPage /> },
  { path: '/', element: <HomePage /> },

  // Account
  { path: '/accounts', element: <AccountsPage /> },
  { path: '/account/create', element: <AccountCreatePage /> },
  { path: '/account/edit/:id', element: <AccountEditPage /> },

  // Currency
  { path: '/currencies', element: <CurrenciesPage /> },

  // Transactions
  { path: '/transactions', element: <TransactionsPage /> },
  { path: '/transaction/create', element: <TransactionCreatePage /> },
  { path: '/transaction/edit/:id', element: <TransactionEditPage /> },

  // Categories
  { path: '/categories', element: <CategoriesPage /> },
  { path: '/category/create', element: <CategoryCreatePage /> },
  { path: '/category/edit/:id', element: <CategoryEditPage /> }
]

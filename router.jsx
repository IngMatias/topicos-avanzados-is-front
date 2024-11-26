import React from 'react'
import ProtectedRoute from './src/components/protectedRoute'

// Páginas
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

  // Account (Rutas protegidas)
  { path: '/accounts', element: <ProtectedRoute><AccountsPage /></ProtectedRoute> },
  { path: '/account/create', element: <ProtectedRoute><AccountCreatePage /></ProtectedRoute> },
  { path: '/account/edit/:id', element: <ProtectedRoute><AccountEditPage /></ProtectedRoute> },

  // Currency (Rutas protegidas)
  { path: '/currencies', element: <ProtectedRoute><CurrenciesPage /></ProtectedRoute> },

  // Transactions (Rutas protegidas)
  { path: '/transactions', element: <ProtectedRoute><TransactionsPage /></ProtectedRoute> },
  { path: '/transaction/create', element: <ProtectedRoute><TransactionCreatePage /></ProtectedRoute> },
  { path: '/transaction/edit/:id', element: <ProtectedRoute><TransactionEditPage /></ProtectedRoute> },

    // Categories
    { path: '/categories', element: <ProtectedRoute><CategoriesPage /></ProtectedRoute> },
    { path: '/category/create', element: <ProtectedRoute><CategoryCreatePage /></ProtectedRoute> },
    { path: '/category/edit/:id', element: <ProtectedRoute><CategoryEditPage /></ProtectedRoute> }
]

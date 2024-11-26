import React from 'react'
import './src/styles/App.css'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { router } from './router.jsx'
import AuthProvider from './AuthProvider'

const root = createRoot(document.getElementById('app'))

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={createBrowserRouter(router)} />
    </AuthProvider>
  </React.StrictMode>
)

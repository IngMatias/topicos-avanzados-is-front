import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { router } from './router.jsx'

import './styles.css'

const root = createRoot(document.getElementById('app'))

root.render(
  <React.StrictMode>
    <RouterProvider router={createBrowserRouter(router)} />
  </React.StrictMode>
)

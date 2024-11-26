import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from '../../hooks/useNavigate'

export default function HomePage () {
  const { navigate } = useNavigate()
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0()

  // Redirigir automáticamente al login si el usuario no está autenticado
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      loginWithRedirect()
    }
  }, [isAuthenticated, isLoading, loginWithRedirect])

  const redirect = (e) => {
    navigate(e.target.dataset.path)
  }

  const renderAuthButtons = () => {
    if (!isAuthenticated) {
      return null // No mostramos botones si no está autenticado (se redirige automáticamente)
    }

    return (
      <div>
        <button
          onClick={() => logout({ returnTo: window.location.origin })}
          className='auth-button'
        >
          Cerrar Sesión
        </button>
        <div className='user-info'>
          <img src={user.picture} alt={user.name} className='profile-picture' />
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <header style={{ marginBottom: '20px' }}>
        <h1>Bienvenido a la Home Page</h1>
        {renderAuthButtons()}
      </header>
      <ul>
        <li>
          <button onClick={redirect} data-path='/accounts'>
            Accounts
          </button>
          <button onClick={redirect} data-path='/currencies'>
            Currencies
          </button>
          <button onClick={redirect} data-path='/transactions'>
            Transactions
          </button>
        </li>
      </ul>
    </div>
  )
}

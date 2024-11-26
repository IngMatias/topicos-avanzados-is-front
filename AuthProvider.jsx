import React from 'react'
import { Auth0Provider } from '@auth0/auth0-react'

const AuthProvider = ({ children }) => {
  const domain = 'dev-rtvlamilionam7yw.us.auth0.com'
  const clientId = '9l8apIhrsNJYDJtS4q24UPjuP7WBMDpk'

  const onRedirectCallback = (appState) => {
    window.history.replaceState(
      {},
      document.title,
      appState?.returnTo || window.location.pathname
    )
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  )
}

export default AuthProvider

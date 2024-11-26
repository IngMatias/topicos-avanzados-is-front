import React from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'

export default function LoginPage () {
  const handleSuccess = (response) => {
    console.log('Token recibido:', response.credential)
    // Aquí puedes enviar el token al backend para validarlo.
  }

  const handleFailure = () => {
    console.error('Login fallido')
  }

  return (
    <GoogleOAuthProvider clientId='568218474889-o5sd1ldlumc82mhohrc78hvq4b646f8l.apps.googleusercontent.com'>
      <div>
        <h1>Login con Google</h1>
        <GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />
      </div>
    </GoogleOAuthProvider>
  )
}

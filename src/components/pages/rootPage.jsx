import React from 'react'
import useHealthHook from '../../hooks/useHealthHook'
import { useEnvHook } from '../../hooks/useEnvHook'

export default function RootPage () {
  const { health } = useHealthHook()
  const { env } = useEnvHook()

  return (
    <ul>
      <li>Backend enviroment: {env}</li>
      <li>Backend health: {health}</li>
    </ul>
  )
}

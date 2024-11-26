import { useNavigate as ReactRouterDomUseNavigate } from 'react-router-dom'

export function useNavigate () {
  const navigate = ReactRouterDomUseNavigate()
  return { navigate }
}

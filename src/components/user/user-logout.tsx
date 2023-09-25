'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useCookies } from 'react-cookie'

export const UserLogout = () => {
  const router = useRouter()
  const [_, __, removeCookie] = useCookies(['J_COOKIE'])

  useEffect(() => {
    removeCookie('J_COOKIE', { path: '/' })
    router.push('/user/login')
  }, [])

  return <p>Logging out...</p>
}

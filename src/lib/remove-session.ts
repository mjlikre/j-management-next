import Cookie from 'js-cookie'
import { useRouter } from 'next/navigation'

export const removeSessionCookies = () => {
  const cookieOpts = {
    domain: process.env.COOKIE_DOMAIN,
    path: '/'
  }

  Cookie.remove(process.env.NEXT_PUBLIC_COOKIE_NAME!, cookieOpts)
}

export const logOut = () => {
  const router = useRouter()
  removeSessionCookies()
  router.push('/user/login')
}

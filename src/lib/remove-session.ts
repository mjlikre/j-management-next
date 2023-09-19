import Cookie from 'js-cookie'

export const removeSessionCookies = () => {
  const cookieOpts = {
    domain: process.env.COOKIE_DOMAIN,
    path: '/'
  }

  Cookie.remove(process.env.NEXT_PUBLIC_COOKIE_NAME!, cookieOpts)
}

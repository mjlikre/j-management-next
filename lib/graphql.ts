import { cacheExchange, createClient, fetchExchange } from '@urql/core'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'

const url = 'http://localhost:3001/graphql'

const isSsr = typeof window === 'undefined'

export const makeClient = (cookie?: RequestCookie) => {
  if (isSsr && cookie) {
    const jCookie = `${cookie?.name}=${cookie?.value}`
    return createClient({
      url,
      exchanges: [cacheExchange, fetchExchange],
      suspense: true,
      fetchOptions: {
        credentials: 'same-origin',
        headers: {
          cookie: jCookie
        }
      }
    })
  }

  return createClient({
    url,
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: {
      credentials: 'include'
    }
  })
}

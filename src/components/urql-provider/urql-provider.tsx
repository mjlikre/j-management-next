'use client'

import { UrqlProvider, ssrExchange } from '@urql/next'
import { ReactNode, useMemo } from 'react'
import { makeClient } from '@/lib/graphql'
import { CookiesProvider } from 'react-cookie'

export const Provider = ({ children }: { children: ReactNode }) => {
  const [client, ssr] = useMemo(() => {
    const ssr = ssrExchange()
    const client = makeClient()
    return [client, ssr]
  }, [])

  return (
    <UrqlProvider client={client} ssr={ssr}>
      <CookiesProvider>{children}</CookiesProvider>
    </UrqlProvider>
  )
}

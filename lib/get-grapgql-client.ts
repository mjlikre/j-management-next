import { makeClient } from '@/lib/graphql'
import { registerUrql } from '@urql/next/rsc'
import { cookies } from 'next/headers'

const { getClient } = registerUrql(() => {
  const cookie = cookies().get('J_COOKIE')
  return makeClient(cookie)
})

export const getGraphqlClient = () => {
  return getClient()
}

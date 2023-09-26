'use client'

import { useQuery } from '@urql/next'
import { FETCH_WORKERS } from '@/graphql/worker'
import { WorkersTable } from '../worker'
import { logOut } from '@/src/lib/remove-session'
import { DashboardHeader } from './dashboard-header'
import { DatePicker } from '../date-picker'

export const Dashboard = () => {
  const [result] = useQuery({
    query: FETCH_WORKERS
  })

  const { data, fetching, error } = result

  if (fetching) return <p>Loading...</p>
  if (error) {
    const errorMessage = error.graphQLErrors[0].message
    if (errorMessage === 'Unauthorized') {
      logOut()
    }
    return <p>Oh no... {errorMessage}</p>
  }

  const { workers = [] } = data || {}

  return (
    <div className="container mx-auto py-10">
      <DashboardHeader />
      <WorkersTable workers={workers} />
    </div>
  )
}

'use client'
import { useQuery } from '@urql/next'
import { FETCH_WORKERS } from '@/graphql/worker'
import { DataTable, makeColumns } from './workers-table'

export const Dashboard = () => {
  const [result] = useQuery({
    query: FETCH_WORKERS
  })

  const { data, fetching, error } = result

  if (fetching) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>

  const { workers = [] } = data || {}

  const columns = makeColumns()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={workers} />
    </div>
  )
}

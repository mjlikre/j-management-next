'use client'
'use client'

import { useQuery } from '@urql/next'
import { FETCH_WORKER } from '@/graphql/worker'
import { logOut } from '@/src/lib/remove-session'

import { FC } from 'react'
import { WorkerProps } from './types'
import { WorkerHeaders } from './worker-headers'
import { WorkerDebtTable } from './worker-debt-table'
import { WorkerDebtPaymentTable } from './worker-debt-payment-table'

export const Worker: FC<WorkerProps> = ({ workerId }) => {
  const [result] = useQuery({
    query: FETCH_WORKER,
    variables: {
      id: workerId
    }
  })

  const { data, fetching, error } = result

  if (fetching) return <p>Loading...</p>
  if (error) {
    console.log(error.graphQLErrors[0].message)
    if (error.graphQLErrors[0].message === 'Unauthorized') {
      logOut()
    }
    return <p>Oh no... {error.message}</p>
  }

  const worker = data?.worker

  if (!worker) {
    return <p>No se pudo procesar</p>
  }
  return (
    <div className="container mx-auto py-10">
      <WorkerHeaders worker={worker} />
      <div className="mt-4 grid grid-cols-2 gap-4">
        <WorkerDebtTable debts={worker.debts} />
        <WorkerDebtPaymentTable debts={worker.debtPayments} />
      </div>
    </div>
  )
}

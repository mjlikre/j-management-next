'use client'

import { FC } from 'react'
import { WorkerProps } from './types'
import { WorkerHeaders } from './worker-headers'
import { WorkerDebtTable } from './worker-debt-table'
import { WorkerDebtPaymentTable } from './worker-debt-payment-table'

export const Worker: FC<WorkerProps> = ({ worker }) => {
  return (
    <div className="container mx-auto py-10">
      <WorkerHeaders worker={worker} />
      <div className='grid grid-cols-2 gap-4 mt-4'>
        <WorkerDebtTable debts={worker.debts} />
        <WorkerDebtPaymentTable debts={worker.debtPayments} />
      </div>
    </div>
  )
}

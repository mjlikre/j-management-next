'use client'

import { WorkersTable } from '../worker/workers-table'
import { FC } from 'react'
import { DashboardProps } from './types'

export const Dashboard: FC<DashboardProps> = ({ workers }) => {

  return (
    <div className="container mx-auto py-10">
      <WorkersTable workers={workers} />
    </div>
  )
}

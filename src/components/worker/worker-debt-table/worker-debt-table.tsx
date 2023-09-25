import { FC } from 'react'
import { debtColumns } from './columns'
import { WorkerDebtTableProps } from './types'
import { DataTable } from '../../table'

export const WorkerDebtTable: FC<WorkerDebtTableProps> = ({ debts }) => {
  return (
    <div>
      Prestamos
      <DataTable columns={debtColumns} data={debts} />
    </div>
  )
}

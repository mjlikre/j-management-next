import { FC } from 'react'
import { debtColumns } from './columns'
import { WorkerDebtTableProps } from './types'
import { DataTable } from '../../table/table'

export const WorkerDebtTable: FC<WorkerDebtTableProps> = ({ debts }) => {
  return <DataTable columns={debtColumns} data={debts} />
}

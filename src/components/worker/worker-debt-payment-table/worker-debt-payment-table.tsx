import { FC } from 'react'
import { debtPaymentColumns } from './columns'
import { WorkerDebtPaymentTableProps } from './types'
import { DataTable } from '../../table/table'

export const WorkerDebtPaymentTable: FC<WorkerDebtPaymentTableProps> = ({ debts }) => {
  return <DataTable columns={debtPaymentColumns} data={debts} />
}

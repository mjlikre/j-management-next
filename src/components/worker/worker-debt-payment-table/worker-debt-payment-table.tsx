import { FC } from 'react'
import { debtPaymentColumns } from './columns'
import { WorkerDebtPaymentTableProps } from './types'
import { DataTable } from '../../table'

export const WorkerDebtPaymentTable: FC<WorkerDebtPaymentTableProps> = ({
  debts
}) => {
  return (
    <div>
      Abono
      <DataTable columns={debtPaymentColumns} data={debts} />
    </div>
  )
}

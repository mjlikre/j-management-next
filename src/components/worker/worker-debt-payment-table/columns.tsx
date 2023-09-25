'use client'

import { ColumnDef } from '@tanstack/react-table'
import { WorkerDebtPayment } from '@/src/types/worker'
import { getWeekDayMonth } from '@/src/lib/time'

export const debtPaymentColumns: ColumnDef<WorkerDebtPayment>[] = [
  {
    accessorFn: row => getWeekDayMonth(new Date(row.createdAt)),
    header: 'Fecha'
  },
  {
    accessorKey: 'amount',
    header: 'cantidad'
  }
]

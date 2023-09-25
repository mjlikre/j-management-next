'use client'

import { ColumnDef } from '@tanstack/react-table'
import { WorkerDebt } from '@/src/types/worker'
import { getWeekDayMonth } from '@/src/lib/time'

export const debtColumns: ColumnDef<WorkerDebt>[] = [
  {
    cell: props => {
      const index = parseInt(props.row.id)
      return <span>{index + 1}</span>
    },
    header: ' '
  },
  {
    accessorFn: row => getWeekDayMonth(new Date(row.createdAt)),
    header: 'Fecha'
  },
  {
    accessorKey: 'amount',
    header: 'cantidad'
  }
]

'use client'

import { ColumnDef } from '@tanstack/react-table'
import { FetchWorkersWorker } from '@/src/types/worker'
import { WorkerDialog } from '../worker-dialog'

export const makeColumns = () => {
  const columns: ColumnDef<FetchWorkersWorker>[] = [
    {
      accessorKey: 'firstName',
      header: 'Nombre'
    },
    {
      accessorKey: 'lastName',
      header: 'Apellido'
    },
    {
      accessorKey: 'debtAmount',
      header: 'Prestamo Historico'
    },
    {
      accessorKey: 'debtPaymentAmount',
      header: 'Pago de Prestamo'
    },
    {
      accessorFn: row => row.debtAmount - row.debtPaymentAmount,
      header: 'Prestamo Restante'
    },
    {
      cell: props => {
        const worker = props.row.original
        return <WorkerDialog worker={worker}/>
      },
      header: ' '
    }
  ]

  return columns
}

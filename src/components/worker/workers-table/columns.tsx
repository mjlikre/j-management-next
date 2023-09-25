'use client'

import { ColumnDef } from '@tanstack/react-table'
import { FetchWorkersWorker } from '@/src/types/worker'
import { WorkerDebtDialog } from '../worker-debt-dialog'
import Link from 'next/link'
import { PlusCircle } from 'react-feather'

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
        return (
          <WorkerDebtDialog
            worker={worker}
            displayComponent={<PlusCircle />}
          />
        )
      },
      header: 'Agregar'
    },
    {
      cell: props => {
        const { id } = props.row.original
        return <Link href={`/worker/${id}`}>Ver</Link>
      },
      header: ' '
    }
  ]

  return columns
}

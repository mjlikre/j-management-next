'use client'

import { ColumnDef } from '@tanstack/react-table'
import { FetchWorkersWorker } from '@/src/types/worker'
import { WorkerDebtDialog } from '../worker-debt-dialog'
import Link from 'next/link'
import { PlusCircle } from 'react-feather'
import { DeleteWorkerDialog } from '../delete-worker-dialog'

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
            displayComponent={<PlusCircle className='text-green-500'/>}
          />
        )
      },
      header: 'Agregar'
    },
    {
      cell: props => {
        const { id } = props.row.original
        return <Link href={`/worker/${id}`} className='p-2 bg-blue-400 text-white hover:text-slate-400 rounded-lg'>Ver Detalles</Link>
      },
      header: ' '
    },
    {
      cell: props => {
        const worker = props.row.original
        return <DeleteWorkerDialog worker={worker}/>
      },
      header: ' '
    }
  ]

  return columns
}

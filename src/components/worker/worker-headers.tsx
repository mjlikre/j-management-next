import { FC } from 'react'
import { WorkerComponentProps } from './types'
import { displayName } from '@/src/lib/user'
import { WorkerDebtDialog } from './worker-debt-dialog'
import { PlusCircle } from 'react-feather'

export const WorkerHeaders: FC<WorkerComponentProps> = ({ worker }) => {
  return (
    <div className="grid h-20 w-full grid-flow-col grid-rows-1 gap-4 rounded-lg border border-solid border-slate-400 p-2">
      <div>
        <div className="font-bold">Nombre: {displayName(worker)}</div>
        <div className="font-bold">Telefono: {worker.phone}</div>
      </div>
      <div>
        <div className="font-bold">Deuda: {worker.debtAmount - worker.debtPaymentAmount}</div>
      </div>
      <div className='grid justify-items-end'>
        <WorkerDebtDialog
          worker={worker}
          displayComponent={
            <div className='flex border-2 border-solid border-blue-400 p-2 rounded-full text-blue-400 hover:bg-slate-100'>
              Agregar <PlusCircle />
            </div>
          }
        />
      </div>
    </div>
  )
}

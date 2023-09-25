import { FC } from 'react'
import { Plus } from 'react-feather'

import { displayName } from '@/src/lib/user'

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from '@/src/components/ui/dialog'
import { Button } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'

import { WorkerDialogProps } from './types'
import { useWorkerDialog } from './use-worker-dialog'
import { DatePicker } from '../../date-picker/date-picker'
import { WorkerDialogSelect } from './worker-dialog-select'

const className = 'grid grid-cols-2 gap-4 py-4'

export const WorkerDialog: FC<WorkerDialogProps> = ({ worker, displayComponent }) => {
  const {
    date,
    setDate,
    open,
    setOpen,
    debtOrPayment,
    setDebtOrPayment,
    value,
    setValue,
    currentDebtAmount,
    updatedDebt,
    inputText,
    onSubmit
  } = useWorkerDialog(worker)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        {displayComponent}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{displayName(worker)}</DialogTitle>
        </DialogHeader>

        <WorkerDialogSelect
          debtOrPayment={debtOrPayment}
          setDebtOrPayment={setDebtOrPayment}
        />
        <div className={className}>
          <div>Deuda Actual: </div>
          <div>{currentDebtAmount}</div>
        </div>
        <div className={className}>
          <div>Deuda Actualizado: </div>
          <div>{updatedDebt}</div>
        </div>
        <div className={className}>
          <div>{inputText}</div>
          <div>
            <Input
              type="number"
              value={value}
              onChange={e => setValue(Number(e.target.value))}
            />
          </div>
        </div>
        <div className={className}>
          <div>Fecha</div>
          <DatePicker date={date} setDate={setDate} />
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button variant="default" onClick={onSubmit}>
            Actualizar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

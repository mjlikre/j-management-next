import { FC, useState } from 'react'
import { useMutation } from '@urql/next'
import * as R from 'ramda'

import { ADD_NEW_DEBT, ADD_NEW_DEBT_PAYMENT } from '@/graphql/worker'

import { displayName } from '@/src/lib/user'

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from '@/src/components/ui/dialog'
import { Button } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'

import { WorkerDialogProps } from './types'
import { WorkerDialogDropdown } from './worker-dialog-dropdown'

const className = 'grid grid-cols-2 gap-4 py-4'

export const WorkerDialog: FC<WorkerDialogProps> = ({ worker }) => {
  const [open, setOpen] = useState(false)
  const [debtOrPayment, setDebtOrPayment] = useState('debt')
  const [value, setValue] = useState(0)

  const [_, addNewDebtMutation] = useMutation(ADD_NEW_DEBT)
  const [__, addNewDebtPaymentMutation] = useMutation(ADD_NEW_DEBT_PAYMENT)

  const currentDebtAmount = worker.debtAmount - worker.debtPaymentAmount
  const updatedDebt =
    debtOrPayment === 'debt'
      ? currentDebtAmount + value
      : currentDebtAmount - value

  const inputText = debtOrPayment === 'debt' ? 'Prestamo:' : 'Abono:'

  const addNewDebt = async () => {
    const payload = {
      createDebtInput: {
        workerId: worker.id,
        amount: value
      }
    }

    try {
      await addNewDebtMutation(payload)
    } catch (error) {
      console.log(error)
    }
  }

  const addNewDebtPayment = async () => {
    const payload = {
      createDebtPaymentInput: {
        workerId: worker.id,
        amount: value
      }
    }
    try {
      await addNewDebtPaymentMutation(payload)
    } catch (error) {
      console.log(error)
    }
  }

  const onSubmit = () => {
    if (debtOrPayment === 'debt') {
      addNewDebt()
    } else {
      addNewDebtPayment()
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button variant="outline">+ Prestamo</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{displayName(worker)}</DialogTitle>
          <DialogDescription>
            <WorkerDialogDropdown
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
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className={className}>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancelar</Button>
            <Button variant="default" onClick={onSubmit}>Actualizar</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

import { useState } from 'react'
import { useMutation } from '@urql/next'

import { ADD_NEW_DEBT, ADD_NEW_DEBT_PAYMENT } from '@/graphql/worker'
import { FetchWorkersWorker } from '@/src/types/worker'
import { executeMutation } from '@/src/lib/execute-mutation'

export const useWorkerDialog = (worker: FetchWorkersWorker) => {
  const [open, setOpen] = useState(false)
  const [debtOrPayment, setDebtOrPayment] = useState('debt')
  const [value, setValue] = useState(0)
  const [date, setDate] = useState<Date | undefined>(new Date())

  const [_, addNewDebtMutation] = useMutation(ADD_NEW_DEBT)
  const [__, addNewDebtPaymentMutation] = useMutation(ADD_NEW_DEBT_PAYMENT)

  const currentDebtAmount = worker.debtAmount - worker.debtPaymentAmount
  const updatedDebt =
    debtOrPayment === 'debt'
      ? currentDebtAmount + value
      : currentDebtAmount - value

  const inputText = debtOrPayment === 'debt' ? 'Prestamo:' : 'Abono:'

  const onSubmit = async () => {
    const payload = {
      workerId: worker.id,
      amount: value,
      date: date ? date.toISOString() : new Date().toISOString()
    }
    if (debtOrPayment === 'debt') {
      await executeMutation({
        mutationFn: async () => {
          await addNewDebtMutation({ createDebtInput: payload })
        },
        successMessage: 'Prestamo agregado exitosamente',
        failureMessage: 'Error al agregar prestamo'
      })
    } else {
      await executeMutation({
        mutationFn: async () => {
          await addNewDebtPaymentMutation({ createDebtPaymentInput: payload })
        },
        successMessage: 'Abono agregado exitosamente',
        failureMessage: 'Error al agregar abono'
      })
    }
  }

  return {
    date,
    open,
    debtOrPayment,
    value,
    updatedDebt,
    inputText,
    currentDebtAmount,
    onSubmit,
    setOpen,
    setDebtOrPayment,
    setValue,
    setDate
  }
}

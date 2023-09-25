import { useState } from 'react'
import { useMutation } from '@urql/next'

import { ADD_NEW_DEBT, ADD_NEW_DEBT_PAYMENT } from '@/graphql/worker'
import { FetchWorkersWorker } from '@/src/types/worker'
import { useToast } from '../../ui/use-toast'
import {
  CreateDebtInput,
  CreateDebtPaymentInput
} from '@/src/__generated__/graphql'

export const useWorkerDebt = (worker: FetchWorkersWorker) => {
  const { toast } = useToast()
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

  const addNewDebt = async (payload: CreateDebtInput) => {
    const { error } = await addNewDebtMutation({ createDebtInput: payload })
    if (!error) {
      toast({
        title: 'Accion Exitosa',
        description: 'Prestamo agregado exitosamente'
      })
    } else {
      toast({
        title: 'Accion Fallida',
        description: 'Error al procesar accion'
      })
    }
  }

  const addNewDebtPayment = async (payload: CreateDebtPaymentInput) => {
    const { error } = await addNewDebtPaymentMutation({
      createDebtPaymentInput: payload
    })
    if (!error) {
      toast({
        title: 'Accion Exitosa',
        description: 'Abono agregado exitosamente'
      })
    } else {
      toast({
        title: 'Accion Fallida',
        description: 'Error al procesar accion'
      })
    }
  }

  const onSubmit = async () => {
    const payload = {
      workerId: worker.id,
      amount: value,
      date: date ? date.valueOf() : new Date().valueOf()
    }

    if (debtOrPayment === 'debt') {
      addNewDebt(payload)
    } else {
      addNewDebtPayment(payload)
    }

    setOpen(false)
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

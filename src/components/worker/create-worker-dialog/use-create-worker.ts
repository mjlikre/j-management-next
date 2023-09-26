import { useEffect, useState } from 'react'
import { useMutation } from 'urql'

import { CREATE_WORKER_MUTATION } from '@/graphql/worker'
import { set } from 'date-fns'

export const useCreateWorker = () => {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [debt, setDebt] = useState(0)
  const [salary, setSalary] = useState(0)
  const [_, addNewWorkerMutation] = useMutation(CREATE_WORKER_MUTATION)

  const onSubmit = async () => {
    try {
      await addNewWorkerMutation({
        workerInput: {
          firstName,
          lastName,
          phone,
          salaryAmount: salary,
          debtAmount: debt,
          startDate: date
        }
      })
    } catch (e) {
      console.log(e)
    }
    setOpen(false)
  }

  const onCancel = () => {
    setOpen(false)
  }

  useEffect(() => {
    setFirstName('')
    setLastName('')
    setPhone('')
    setDebt(0)
    setSalary(0)
    setDate(new Date())
  }, [open])

  return {
    open,
    date,
    firstName,
    salary,
    debt,
    lastName,
    phone,
    setFirstName,
    setLastName,
    setPhone,
    setSalary,
    setDebt,
    setDate,
    setOpen,
    onSubmit,
    onCancel
  }
}

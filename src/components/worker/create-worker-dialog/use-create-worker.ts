import { useEffect, useState } from 'react'
import { useMutation } from 'urql'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { CREATE_WORKER_MUTATION } from '@/graphql/worker'

const formSchema = z.object({
  firstName: z.string().min(1, {
    message: 'Nombre no puede estar vacillo'
  }),
  lastName: z.string().min(1, {
    message: 'Apellido no puede estar vacillo'
  }),
  salaryAmount: z.preprocess(
    a => parseInt(z.string().parse(a)),
    z
      .number()
      .positive()
      .positive({ message: 'Salario mensual debe ser mas de 0' })
  ),
  phone: z.string().nullable(),
  debtAmount: z.number().int().default(0)
})

export const useCreateWorker = () => {
  const [open, setOpen] = useState(false)
  const [_, addNewWorkerMutation] = useMutation(CREATE_WORKER_MUTATION)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      debtAmount: 0,
      salaryAmount: 0
    }
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await addNewWorkerMutation({ workerInput: values })
    } catch (e) {
      console.log(e)
    }
    setOpen(false)
  }

  const onCancel = () => {
    setOpen(false)
  }

  useEffect(() => {
    form.reset()
  }, [open])

  return {
    open,
    form,
    setOpen,
    onSubmit,
    onCancel
  }
}

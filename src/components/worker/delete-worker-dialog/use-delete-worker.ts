import { useState } from 'react'
import { useMutation } from '@urql/next'

import { REMOVE_WORKER } from '@/graphql/worker'

export const useDeleteWorker = () => {
  const [_, removeWorkerMutation] = useMutation(REMOVE_WORKER)
  const [open, setOpen] = useState(false)

  const handleDeleteWorker = async (id: string) => {
    try {
      await removeWorkerMutation({ id })
    } catch (error) {
      console.error(error)
    }
  }

  return { open, setOpen, handleDeleteWorker }
}

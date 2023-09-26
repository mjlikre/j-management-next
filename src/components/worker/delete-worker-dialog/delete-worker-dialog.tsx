import { FC } from 'react'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/src/components/ui/alert-dialog'
import { useDeleteWorker } from './use-delete-worker'
import { DeleteWorkerDialogProps } from './types'
import { displayName } from '@/src/lib/user'

export const DeleteWorkerDialog: FC<DeleteWorkerDialogProps> = ({ worker }) => {
  const { open, setOpen, handleDeleteWorker } = useDeleteWorker()
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger className='p-2 bg-red-500 text-white rounded-lg'>Eliminar</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Eliminar a {displayName(worker)}</AlertDialogTitle>
          <AlertDialogDescription>
            Esta acción no se puede deshacer. Esto eliminará permanentemente a{' '}
            {displayName(worker)} y sus datos de nuestros servidores.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleDeleteWorker(worker.id)}>Confirmar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

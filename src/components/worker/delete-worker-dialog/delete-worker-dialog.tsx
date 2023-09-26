import { FC } from 'react'

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogFooter
} from '@/src/components/ui/dialog'
import { useDeleteWorker } from './use-delete-worker'
import { DeleteWorkerDialogProps } from './types'
import { displayName } from '@/src/lib/user'
import { Button } from '../../ui/button'

export const DeleteWorkerDialog: FC<DeleteWorkerDialogProps> = ({ worker }) => {
  const { open, setOpen, handleDeleteWorker } = useDeleteWorker()
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className='p-2 bg-red-500 text-white rounded-lg'>Eliminar</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Eliminar a {displayName(worker)}</DialogTitle>
          <DialogDescription>
            Esta acción no se puede deshacer. Esto eliminará permanentemente a{' '}
            {displayName(worker)} y sus datos de nuestros servidores.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Cancelar</Button>
          <Button variant='destructive' onClick={() => handleDeleteWorker(worker.id)}>Confirmar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

import { Input } from '@/src/components/ui/input'
import { Button } from '@/src/components/ui/button'

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/src/components/ui/dialog'

export const CreateWorkerDialog = () => {
  return (
    <Dialog open={open} onOpenChange={setOpen} modal={true} >
      <DialogTrigger className="my-2 rounded-lg border border-solid border-slate-200 p-2 text-blue-500 hover:bg-slate-200 hover:text-slate-400">
        Agregar Trabajador
      </DialogTrigger>
      <DialogContent className='h-1/2'>
        <DialogHeader>
          <DialogTitle>Agregar un nuevo trabajador</DialogTitle>
        </DialogHeader>
        
      </DialogContent>
    </Dialog>
  )
}


export const DeleteWorkerDialog = () => {

}
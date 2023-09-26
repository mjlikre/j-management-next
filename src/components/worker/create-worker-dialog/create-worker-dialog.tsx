import { Input } from '@/src/components/ui/input'
import { Button } from '@/src/components/ui/button'
import { Label } from '@/src/components/ui/label'

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from '@/src/components/ui/dialog'

import { useCreateWorker } from './use-create-worker'
import { DatePicker } from '../../date-picker'

export const CreateWorkerDialog = () => {
  const {
    firstName,
    lastName,
    phone,
    debt,
    salary,
    setDebt,
    setFirstName,
    setLastName,
    setPhone,
    setSalary,
    onSubmit,
    open,
    setOpen,
    onCancel,
    date,
    setDate
  } = useCreateWorker()
  return (
    <Dialog open={open} onOpenChange={setOpen} modal={true}>
      <DialogTrigger className="my-2 rounded-lg border border-solid border-slate-200 p-2 text-blue-500 hover:bg-slate-200 hover:text-slate-400">
        Agregar Trabajador
      </DialogTrigger>
      <DialogContent className="h-1/2">
        <DialogHeader>
          <DialogTitle>Agregar un nuevo trabajador</DialogTitle>
        </DialogHeader>
        <div className="mb-2">
          <div className="py-2">
            <Label className="pb-2">Nombre</Label>
            <Input
              placeholder="Juan"
              value={firstName}
              onChange={event => setFirstName(event.target.value)}
            />
          </div>
          <div className="py-2">
            <Label className="pb-2">Apellido</Label>
            <Input
              placeholder="Perez"
              value={lastName}
              onChange={event => setLastName(event.target.value)}
            />
          </div>
          <div className="py-2">
            <Label className="pb-2">Telefono</Label>
            <Input
              placeholder="88888888"
              value={phone}
              onChange={event => setPhone(event.target.value)}
            />
          </div>
          <div className="py-2">
            <Label className="pb-2">Salario Mensual</Label>
            <Input
              placeholder="5000"
              value={salary}
              onChange={event => setSalary(Number(event.target.value))}
            />
          </div>
          <div className="py-2">
            <Label className="pb-2">Deuda</Label>
            <Input
              value={debt}
              onChange={event => setDebt(Number(event.target.value))}
            />
          </div>
          <div className="flex flex-col">
            <DatePicker date={date} setDate={setDate} />
          </div>
        </div>
        <DialogFooter>
          <Button
            className="mr-2"
            variant="outline"
            type="reset"
            onClick={onCancel}>
            Cancelar
          </Button>
          <Button type="submit" onClick={onSubmit}>
            Agregar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

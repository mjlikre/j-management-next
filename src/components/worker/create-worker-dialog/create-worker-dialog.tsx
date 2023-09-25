import { Input } from '@/src/components/ui/input'
import { Button } from '@/src/components/ui/button'

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/src/components/ui/dialog'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/src/components/ui/form'
import { useCreateWorker } from './use-create-worker'

export const CreateWorkerDialog = () => {
  const { form, onSubmit, open, setOpen, onCancel } = useCreateWorker()
  return (
    <Dialog open={open} onOpenChange={setOpen} modal={true} >
      <DialogTrigger className="my-2 rounded-lg border border-solid border-slate-200 p-2 text-blue-500 hover:bg-slate-200 hover:text-slate-400">
        Agregar Trabajador
      </DialogTrigger>
      <DialogContent className='h-1/2'>
        <DialogHeader>
          <DialogTitle>Agregar un nuevo trabajador</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 rounded border border-solid border-slate-400 p-8">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input placeholder="Juan" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Apellido</FormLabel>
                  <FormControl>
                    <Input placeholder="Gutierrez" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefono</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="80808080"
                      {...field}
                      value={field.value ?? ''}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="salaryAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Salario Mensual</FormLabel>
                  <FormControl>
                    <Input {...field} type='number'/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
           
            <Button className='mr-2'  variant='outline' type="reset" onClick={onCancel}>Cancelar</Button>
            <Button type="submit">Agregar</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

import { useToast } from '@/src/components/ui/use-toast'

interface executeMutationProps {
  mutationFn: () => Promise<void>
  successMessage: string
  failureMessage: string
}

export async function executeMutation(props: executeMutationProps) {
  const { mutationFn, successMessage, failureMessage } = props
  const { toast } = useToast()
  try {
    await mutationFn()
    toast({
      title: 'Accion Exitosa',
      description: successMessage
    })
  } catch (err) {
    console.error(err)
    toast({
      title: 'Accion Fallida',
      description: failureMessage
    })
  }
}

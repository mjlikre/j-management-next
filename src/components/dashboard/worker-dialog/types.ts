import { FetchWorkersWorker } from '@/src/types/worker'

export interface WorkerDialogProps {
  worker: FetchWorkersWorker
}

export interface WorkerDialogDropdownProps {
  debtOrPayment: string
  setDebtOrPayment: (_: string) => void
}

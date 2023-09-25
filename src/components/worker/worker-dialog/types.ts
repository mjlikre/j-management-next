import { FetchWorkersWorker } from '@/src/types/worker'

export interface WorkerDialogProps {
  worker: FetchWorkersWorker
  displayComponent: React.ReactNode
}

export interface WorkerDialogDropdownProps {
  debtOrPayment: string
  setDebtOrPayment: (_: string) => void
}

export interface WorkerDialogSelectProps {
  debtOrPayment: string
  setDebtOrPayment: (_: string) => void
}

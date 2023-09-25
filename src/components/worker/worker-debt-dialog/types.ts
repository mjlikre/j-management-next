import { FetchWorkersWorker } from '@/src/types/worker'

export interface WorkerDebtDialogProps {
  worker: FetchWorkersWorker
  displayComponent: React.ReactNode
}

export interface WorkerDebtDialogDropdownProps {
  debtOrPayment: string
  setDebtOrPayment: (_: string) => void
}

export interface WorkerDebtDialogSelectProps {
  debtOrPayment: string
  setDebtOrPayment: (_: string) => void
}

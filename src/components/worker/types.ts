import { FetchWorkerWorker } from '@/src/types/worker'

export interface WorkerProps {
  workerId: string
}

export interface WorkerComponentProps {
  worker: FetchWorkerWorker
}

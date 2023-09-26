import { FetchWorkersWorker } from '@/src/types/worker'

export interface DeleteWorkerDialogProps {
  worker: Pick<FetchWorkersWorker, 'firstName' | 'lastName' | 'id'>
}

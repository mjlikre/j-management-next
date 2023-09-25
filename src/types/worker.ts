import {
  FetchWorkersDataQuery,
  FetchWorkerDataQuery
} from '../__generated__/graphql'

export type FetchWorkersWorker = NonNullable<
  FetchWorkersDataQuery['workers'][number]
>

export type FetchWorkerWorker = NonNullable<FetchWorkerDataQuery['worker']>

export type WorkerDebt = NonNullable<FetchWorkerWorker['debts'][number]>

export type WorkerDebtPayment = NonNullable<
  FetchWorkerWorker['debtPayments'][number]
>

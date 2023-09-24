import { Worker } from '../__generated__/graphql'

export const displayName = (worker: Pick<Worker, 'firstName' | 'lastName'>) =>
  `${worker.firstName} ${worker.lastName}`

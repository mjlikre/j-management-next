import { gql } from "@/src/__generated__";

export const USER_WORKER_MUTATION = gql(`
mutation CreateWorker($workerInput: CreateWorkerInput!) {
    createWorker(createWorkerInput: $workerInput) {
       id
             firstName
             lastName
             debtAmount
             salaryAmount
     }
 }
`);

export const FETCH_WORKER = gql(`
query FetchWorkerData($id: UUID!) {
    worker(id: $id) {
       firstName
             lastName
             id
             debtAmount
             salaryAmount
             debtPaymentAmount
     }
   }
`);

import { gql } from '@/src/__generated__'

export const CREATE_WORKER_MUTATION = gql(`
    mutation CreateWorker($workerInput: CreateWorkerInput!) {
        createWorker(createWorkerInput: $workerInput) {
            id
            firstName
            lastName
            debtAmount
            salaryAmount
        }
    }
`)

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
`)

export const FETCH_WORKERS = gql(`
    query FetchWorkersData {
        workers{
            firstName
            lastName
            id
            debtAmount
            salaryAmount
            debtPaymentAmount
        }
    }
`)

export const UPDATE_WORKER_MUTATION = gql(`
    mutation UpdateWorker($updateWorkerInput: UpdateWorkerInput!) {
        updateWorker(updateWorkerInput: $updateWorkerInput) {
            id
            firstName
            lastName
            debtAmount
            salaryAmount
        }
    }
`)

export const ADD_NEW_DEBT = gql(`
    mutation AddDebt($createDebtInput: CreateDebtInput!) {
        createDebt(createDebtInput: $createDebtInput) {
            id,
            debtAmount,
            debtPaymentAmount
        }
    }
`)

export const ADD_NEW_DEBT_PAYMENT = gql(`
    mutation AddDebtPayment($createDebtPaymentInput: CreateDebtPaymentInput!) {
        createDebtPayment(createDebtPaymentInput: $createDebtPaymentInput) {
            id,
            debtAmount,
            debtPaymentAmount
        }
    }
`)

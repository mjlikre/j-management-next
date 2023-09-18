import { gql } from "@/src/__generated__";

export const USER_LOGIN_MUTATION = gql(`
    mutation UserLogin($loginInput: LoginInput!) {
        login(loginInput: $loginInput) {
            id
            token
            lang
        }
    }
`);

export const CREATE_USER_MUTATION = gql(`
    mutation CreateUser($createUser: CreateUserInput!) {
        createUser(createUserInput: $createUser) {
            id,
            token
        }
    }
`);

export const FETCH_USER = gql(`
    query FetchUserData($id: UUID!) {
        user(id: $id) {
            userName
            createdAt
            password
        }
    }
`);

export const VALIDATE_USER = gql(`
    query ValidateUser {
        validateUser {
            id
        }
    }
`)

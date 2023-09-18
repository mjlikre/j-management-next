import React from 'react';
import { VALIDATE_USER } from "@/graphql/user"
import { getGraphqlClient } from '@/lib/get-grapgql-client';

export default async function UserPage() {
    const client = getGraphqlClient()
    const result = await client.query(VALIDATE_USER, {})
    
    console.log(result)
    return(
        <div>
            <h1>Users</h1>
        </div>
    )
}
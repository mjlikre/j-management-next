import React from 'react';
import { VALIDATE_USER } from "@/graphql/user"
import { getGraphqlClient } from '@/lib/get-grapgql-client';
import { Dashboard } from '@/src/components/dashboard/dashboard';

export default async function DashboardPage() {
    const client = getGraphqlClient()
    const result = await client.query(VALIDATE_USER, {})

    if (result.error) {
    }
    return(
        <Dashboard />
    )
}
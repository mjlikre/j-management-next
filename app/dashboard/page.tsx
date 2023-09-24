import React from 'react';
import { getGraphqlClient } from '@/lib/get-grapgql-client';
import { Dashboard } from '@/src/components/dashboard/dashboard';
import { FETCH_WORKERS } from '@/graphql/worker';

export default async function DashboardPage() {
    const client = getGraphqlClient()
    const result = await client.query(FETCH_WORKERS, {})

    console.log(result)

    return(
        <Dashboard />
    )
}
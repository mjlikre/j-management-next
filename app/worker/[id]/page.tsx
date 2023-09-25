import { getGraphqlClient } from '@/lib/get-grapgql-client'
import { FETCH_WORKER } from '@/graphql/worker'
import { Worker } from '@/src/components/worker/worker'

type Props = {
  params: { id: string }
}

export default async function WorkerPage(props: Props) {
  const id = props.params.id
  const client = getGraphqlClient()
  const result = await client.query(FETCH_WORKER, { id })

  const worker = result.data?.worker

  if (!worker) {
    return <p>No se pudo procesar el peticion</p>
  }

  return (
    <Worker worker={worker}/>
  )
}

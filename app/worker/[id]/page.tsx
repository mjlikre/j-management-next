import { getGraphqlClient } from '@/lib/get-grapgql-client'
import { FETCH_WORKER } from '@/graphql/worker'
import { Worker } from '@/src/components/worker/worker'

type Props = {
  params: { id: string }
}

export default async function WorkerPage(props: Props) {
  const id = props.params.id

  return (
    <Worker workerId={id}/>
  )
}

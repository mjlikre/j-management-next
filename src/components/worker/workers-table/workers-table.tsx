import { FC } from "react"
import { DataTable } from "../../table"
import { WorkersTableProps } from "./types"
import { makeColumns } from "./columns"

export const WorkersTable: FC<WorkersTableProps> = ({ workers }) => {
    const columns = makeColumns()
    return (
        <DataTable columns={columns} data={workers} />
    )
}
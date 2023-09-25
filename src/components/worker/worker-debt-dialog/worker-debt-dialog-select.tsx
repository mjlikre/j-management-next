import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/src/components/ui/select'
import { FC } from 'react'
import { WorkerDebtDialogSelectProps } from './types'

export const WorkerDebtDialogSelect: FC<WorkerDebtDialogSelectProps> = ({ debtOrPayment, setDebtOrPayment }) => {
  return (
    <Select onValueChange={setDebtOrPayment} defaultValue={debtOrPayment}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="debt">Prestamo</SelectItem>
        <SelectItem value="debtPayment">Abono</SelectItem>
      </SelectContent>
    </Select>
  )
}

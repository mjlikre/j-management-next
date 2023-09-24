'use client'

import { FC } from 'react'

import { Button } from '@/src/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from '@/src/components/ui/dropdown-menu'
import { WorkerDialogDropdownProps } from './types'

export const WorkerDialogDropdown: FC<WorkerDialogDropdownProps> = ({
  debtOrPayment,
  setDebtOrPayment
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {debtOrPayment === 'debt' ? 'Prestamo' : 'Abono'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup
          value={debtOrPayment}
          onValueChange={setDebtOrPayment}>
          <DropdownMenuRadioItem value="debt">Prestamo</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="payment">Abono</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

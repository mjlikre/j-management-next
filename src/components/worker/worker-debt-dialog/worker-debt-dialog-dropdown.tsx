'use client'

import { FC } from 'react'
import { ChevronDown } from 'react-feather'

import { Button } from '@/src/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from '@/src/components/ui/dropdown-menu'
import { WorkerDebtDialogDropdownProps } from './types'

export const WorkerDebtDialogDropdown: FC<WorkerDebtDialogDropdownProps> = ({
  debtOrPayment,
  setDebtOrPayment
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className='w-1/2'>
          {debtOrPayment === 'debt' ? 'Prestamo' : 'Abono'}
          <ChevronDown />
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

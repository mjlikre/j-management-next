'use client'

import * as React from 'react'
import es from 'date-fns/locale/es'
import { Calendar as CalendarIcon } from 'react-feather'

import { cn } from '@/lib/utils'
import { Button } from '@/src/components/ui/button'
import { Calendar } from '@/src/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/src/components/ui/popover'
import { getWeekDayMonth } from '@/src/lib/time'

export const DatePicker: React.FC<DatePickerProps> = ({ date, setDate }) => {

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-auto justify-start text-left font-normal',
            !date && 'text-muted-foreground'
          )}>
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? getWeekDayMonth(date) : <span>Selecciona una fecha</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          locale={es}
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover> 
  )
}

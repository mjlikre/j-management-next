import { format } from 'date-fns'
import es from 'date-fns/locale/es'

export const getWeekDayMonth = (date: Date): string => {
  const dayOfTheWeek = format(date, 'EEEE', { locale: es })
  const restDate = format(date, 'P', { locale: es })
  const dateString = `${dayOfTheWeek}, ${restDate}`
  return dateString
}

export const getDayMonth = (date: Date): string => {
  const dayOfTheMonth = format(date, 'd', { locale: es })
  const monthOfTheYear = format(date, 'LLLL', { locale: es })
  const dateString = `${dayOfTheMonth} de ${monthOfTheYear}`
  return dateString
}

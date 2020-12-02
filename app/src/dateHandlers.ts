//вспомогательные функции обработки даты по миллисекундам. День и время (на выбор с секундами или нет)

const formatTimeNumber = (num: number): string => num<10 ? `0${num}`: `${num}`

const getFullDay = (ms: string): string => {
    const date = new Date(ms)
    const monthNames = ['января', 'февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря']
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    return `${day} ${monthNames[month]} ${year}`
}

const getFullTime = (withSec: boolean) => (ms: string): string => {
    const date = new Date(ms)
    const hours = formatTimeNumber(date.getHours())
    const minutes = formatTimeNumber(date.getMinutes())
    const seconds = formatTimeNumber(date.getSeconds())
    return `${hours}:${minutes}${(withSec)? `:${seconds}`:''}`
}

const getTimeWithoutSec = getFullTime(false)
const getTimeWithSec = getFullTime(true)


export {getFullDay, getFullTime, getTimeWithSec, getTimeWithoutSec}
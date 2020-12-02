//вспомогательные функции обработки даты по миллисекундам. День и время (на выбор с секундами или нет)
const getFullDay = ms => {
    let date = new Date(ms)
    let monthNames = ['января', 'февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря']
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDate()
    return `${day} ${monthNames[month]} ${year}`
}

const getFullTime = withSec => ms => {
    let date = new Date(ms)
    let hours = (date.getHours()<10)? `0${date.getHours()}`: `${date.getHours()}`
    let minutes = (date.getMinutes()<10)? `0${date.getMinutes()}`: `${date.getMinutes()}`
    let seconds = (date.getSeconds()<10)? `0${date.getSeconds()}`: `${date.getSeconds()}`
    return `${hours}:${minutes}${(withSec)? `:${seconds}`:''}`
}

const getTimeWithoutSec = getFullTime(false)
const getTimeWithSec = getFullTime(true)


export {getFullDay, getFullTime, getTimeWithSec, getTimeWithoutSec}
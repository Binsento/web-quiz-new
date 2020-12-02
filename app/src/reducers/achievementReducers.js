import initialAchievementState from './achievments'
import * as t from '../actionTypes'

export default (state = initialAchievementState, action) => {
    switch (action.type) {
        case t.NEW_ACHIEVEMENT_EARN: {
            let cache = {...state[action.id]}
            cache.earn = true
            cache.dateInMs = Date.now()
            return {
                ...state,
                [action.id]: {...cache}
            }
        }
        case t.LOAD_ACHIEVEMENT_STATS: {
            let cache = {...state[action.id]}
            cache.earn = true
            cache.dateInMs = action.date
            return {
                ...state,
                [action.id]: {...cache}
            }
        }
        default:
            return state
    }
}
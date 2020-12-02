import * as t from '../actionTypes'

let initialUserState = {
    isLandscape: true,
    passed: 0,
    perfect: 0,
    achievements: 0,
    passedTests: {},
    earnedAchievements: {}
}

let userState = JSON.parse(localStorage.getItem('myUserState')) || initialUserState

export default (state = userState, action) => {
    switch (action.type) {
        case t.SET_TEST_STATS: {
            let cache = { ...state.passedTests }
            cache[action.id] = {
                attempts: 0,
                bestResult: 0,
                isPerfect: false
            }
            return {
                ...state,
                passedTests: {
                    ...cache
                }
            }
        }
        case t.UPDATE_TEST_STATS: {
            let { id, score, isPerfect } = action
            let cache = { ...state.passedTests }
            cache[id] = {
                attempts: cache[id].attempts + 1,
                bestResult: (cache[id].bestResult < score) ? score : cache[id].bestResult,
                isPerfect: cache[id].isPerfect || isPerfect
            }
            return {
                ...state,
                passedTests: {
                    ...cache
                }
            }
        }
        case t.UPDATE_PERFECT_COUNT: {
            return {
                ...state,
                perfect: state.perfect + 1
            }
        }
        case t.UPDATE_PASSED_COUNT: {
            return {
                ...state,
                passed: state.passed + 1,
            }
        }
        case t.UPDATE_ACHIEVEMENTS_COUNT: {
            let cache = { ...state.earnedAchievements }
            cache[action.id] = Date.now()
            return {
                ...state,
                earnedAchievements: {
                    ...cache
                },
                achievements: state.achievements + 1
            }
        }
        case t.CHANGE_ORIENTATION: {
            return {
                ...state,
                isLandscape: !state.isLandscape
            }
        }
        default:
            return state
    }
}
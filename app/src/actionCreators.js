import * as t from './actionTypes'

//achievement

export const achievementEarn = (id) => ({
    type: t.NEW_ACHIEVEMENT_EARN,
    id
})

export const loadStats = (id, date) => ({
    type: t.LOAD_ACHIEVEMENT_STATS,
    id,
    date
})

//filter
export const getTypes = () => ({
    type: t.GET_TYPES
})

export const getTypesSuccess = (types) => ({
    type: t.GET_TYPES_SUCCESS,
    payload: types
})

export const getTypesFailure = () => ({
    type: t.GET_TYPES_FAILURE
})

export const clearFilter = () => ({
    type: t.CLEAR_FILTER
})

export const addFilter = (type) => ({
    type: t.ADD_FILTER_TYPE,
    payload: type
})

export const removeFilter = (type) => ({
    type: t.REMOVE_FILTER_TYPE,
    payload: type
})


//test

export const getTests = () => ({
    type: t.GET_TESTS
})
export const getTestsSuccess = (tests) => ({
    type: t.GET_TESTS_SUCCESS,
    tests
})

export const getTestsFailure = () => ({
    type: t.GET_TESTS_FAILURE
})

export const startTest = (id) => ({
    type: t.START_TEST,
    id
})

export const correctAnswer = () => ({
    type: t.CORRECT_ANSWER
})

export const nextQuestion = () => ({
    type: t.NEXT_QUESTION
})

export const testExit = () => ({
    type: t.TEST_EXIT
})



//user

export const setTestStats = (id) => ({
    type: t.SET_TEST_STATS,
    id
})

export const updateTestStats = (id, score, isPerfect) => ({
    type: t.UPDATE_TEST_STATS,
    id,
    score,
    isPerfect 
})

export const updatePerfectCount = () => ({
    type: t.UPDATE_PERFECT_COUNT
})
export const updatePassedCount = () => ({
    type: t.UPDATE_PASSED_COUNT
})

export const updateAchievementsCount = (id) => ({
    type: t.UPDATE_ACHIEVEMENTS_COUNT,
    id
})

export const changeOrientation = () => ({
    type: t.CHANGE_ORIENTATION
})
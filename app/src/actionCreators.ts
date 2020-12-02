import * as t from './actionTypes'
import {TestData} from "./types";

//achievement

export const achievementEarn = (id: string) => ({
    type: t.NEW_ACHIEVEMENT_EARN,
    id
})

export const loadStats = (id: string, date: string) => ({
    type: t.LOAD_ACHIEVEMENT_STATS,
    id,
    date
})

//filter
export const getTypes = () => ({
    type: t.GET_TYPES
})

export const getTypesSuccess = (types: Set<string>  ) => ({
    type: t.GET_TYPES_SUCCESS,
    payload: types
})

export const getTypesFailure = () => ({
    type: t.GET_TYPES_FAILURE
})

export const clearFilter = () => ({
    type: t.CLEAR_FILTER
})

export const addFilter = (type: string) => ({
    type: t.ADD_FILTER_TYPE,
    payload: type
})

export const removeFilter = (type: string) => ({
    type: t.REMOVE_FILTER_TYPE,
    payload: type
})


//test

export const getTests = () => ({
    type: t.GET_TESTS
})
export const getTestsSuccess = (tests: TestData[]) => ({
    type: t.GET_TESTS_SUCCESS,
    tests
})

export const getTestsFailure = () => ({
    type: t.GET_TESTS_FAILURE
})

export const startTest = (id: string) => ({
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

export const setTestStats = (id: string) => ({
    type: t.SET_TEST_STATS,
    id
})

export const updateTestStats = (id: string, score: number, isPerfect: boolean) => ({
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

export const updateAchievementsCount = (id: string) => ({
    type: t.UPDATE_ACHIEVEMENTS_COUNT,
    id
})

export const changeOrientation = () => ({
    type: t.CHANGE_ORIENTATION
})
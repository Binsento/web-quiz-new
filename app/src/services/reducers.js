import {combineReducers} from 'redux'
import filter from './filterService/filterReducers'
import tests from './testsService/testReducers'
import user from './userService/userReducers'
import {achievementsReducer} from './achievmentsService/achievementsSlice'

export default combineReducers ({
    filter,
    tests,
    user,
    achievements: achievementsReducer
})
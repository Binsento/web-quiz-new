import {combineReducers} from 'redux'
import filter from './filterService/filterReducers'
import tests from './testsService/testReducers'
import user from './userService/userReducers'
import achievements from './achievmentsService/achievementReducers'

export default combineReducers ({
    filter,
    tests,
    user,
    achievements
})
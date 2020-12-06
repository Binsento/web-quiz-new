import {combineReducers} from 'redux'
import {filtersReducer} from './filterService/filtersSlice'
import tests from './testsService/testReducers'
import user from './userService/userReducers'
import {achievementsReducer} from './achievmentsService/achievementsSlice'

export default combineReducers ({
    filter: filtersReducer,
    tests,
    user,
    achievements: achievementsReducer
})
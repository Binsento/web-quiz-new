import {combineReducers} from 'redux'
import filter from './filterReducers'
import tests from './testReducers'
import user from './userReducers'
import achievements from './achievementReducers'


export default combineReducers ({
    filter,
    tests,
    user,
    achievements
})
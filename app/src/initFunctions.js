//функции получающие данные тестов с сервера и записывающие в состояние

import { getTypes, getTypesSuccess, getTypesFailure } from './actionCreators'
import { getTests, getTestsSuccess, getTestsFailure } from './actionCreators'

export const fetchTypes = (url) => async (dispatch) => {
    dispatch(getTypes())
    try {
        let response = await fetch(url)
        let result = await response.json()
        dispatch(getTypesSuccess(new Set(result.data)))
    } catch (err) {
        dispatch(getTypesFailure())
    }
}

export const fetchTests = (url) => async (dispatch) => {
    dispatch(getTests())
    try {
        let response = await fetch(url)
        let result = await response.json()
        dispatch(getTestsSuccess(new Map(result.data)))
    } catch (err) {
        dispatch(getTestsFailure())
    }
}
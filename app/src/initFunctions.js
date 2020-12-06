//функции получающие данные тестов с сервера и записывающие в состояние

import { getTests, getTestsSuccess, getTestsFailure } from './actionCreators'

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
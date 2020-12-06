import {getTypesStart, getTypesFail, getTypesSuccess} from "./filtersSlice";
import { Dispatch } from 'redux';

export const fetchTypes = () => async (dispatch: Dispatch) => {
    dispatch(getTypesStart())
    try {
        let response = await fetch('/api/types')
        let result = await response.json()
        dispatch(getTypesSuccess(new Set(result.data)))
    } catch (err) {
        dispatch(getTypesFail())
    }
}
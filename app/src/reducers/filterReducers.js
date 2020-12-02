import * as t from '../actionTypes'

let initialFilterState = {
    doneFetching: false,
    error: false,
    allTypes: new Set(),
    typeFilter: new Set(),
}

export default (state = initialFilterState, action) => {
    switch (action.type) {
        case t.ADD_FILTER_TYPE:
            return {
                ...state,
                typeFilter: new Set([...Array.from(state.typeFilter), action.payload]),
            }
        case t.REMOVE_FILTER_TYPE:
            let cache = new Set(state.typeFilter)
            cache.delete(action.payload)
            return {
                ...state,
                typeFilter: new Set([...Array.from(cache)]),
            }
        case t.CLEAR_FILTER:
            return {
                ...state,
                typeFilter: new Set()
            }
        case t.GET_TYPES:
            return {
                ...state,
                allTypes: new Set(),
                typeFilter: new Set(),
                doneFetching: false,
                error: false,
            }
        case t.GET_TYPES_SUCCESS:
            return {
                ...state,
                doneFetching: true,
                allTypes: action.payload,
                error: false
            }
        case t.GET_TYPES_FAILURE:
            return {
                ...state,
                doneFetching: true,
                error: true,
            }
        default:
            return state
    }
}
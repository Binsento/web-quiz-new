import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FiltersStoreData} from "../redux-types";


//Todo уйти от сетов и сделать единое поле статуса запроса
const initialState: FiltersStoreData = {
    doneFetching: false,
    error: false,
    allTypes: new Set(),
    typeFilter: new Set(),
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState: initialState,
    reducers: {
        getTypesStart: (state) => {
            state.doneFetching = false
                state.error = false
        },
        getTypesSuccess: (state, action: PayloadAction<Set<string>>) => {
            state.doneFetching = true
            state.error = false
            state.allTypes = action.payload
        },
        getTypesFail: (state) => {
            state.doneFetching = true
            state.error = true
        },
        addFilter: (state, action: PayloadAction<string>) => {
            state.typeFilter.add(action.payload)
        },
        removeFilter: (state, action: PayloadAction<string>) => {
            state.typeFilter.delete(action.payload)
        },
        clearFilters: (state) => {
            state.typeFilter = new Set()
        },
    },
})

const { actions, reducer } = filtersSlice

export const filtersReducer = reducer

export const getTypesStart = actions.getTypesStart
export const getTypesSuccess = actions.getTypesSuccess
export const getTypesFail = actions.getTypesFail
export const clearFilters = actions.clearFilters
export const addFilter = actions.addFilter
export const removeFilter = actions.removeFilter
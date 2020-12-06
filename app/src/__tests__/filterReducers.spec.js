import {filtersReducer} from '../services/filterService/filtersSlice'
import * as t from '../actionTypes'

let state = {
    typeFilter: new Set(['foo', 'bar']),
    test: {}
}

describe('Filter Reducers', () => {
    it('reducer ADD_FILTER_TYPE', () => {
        expect(
            filtersReducer(state, {
                type: t.ADD_FILTER_TYPE,
                payload: 'test'
            })
        ).toEqual({
            typeFilter: new Set(['foo', 'bar', "test"]),
            test: {}
        })
    })
    it('reducer REMOVE_FILTER_TYPE', () => {
        expect(
            filtersReducer(state, {
                type: t.REMOVE_FILTER_TYPE,
                payload: 'bar'
            })
        ).toEqual({
            typeFilter: new Set(['foo']),
            test: {}
        })
    })
    it('reducer CLEAR_FILTER', () => {
        expect(
            filtersReducer(state, {
                type: t.CLEAR_FILTER
            })
        ).toEqual({
            typeFilter: new Set(),
            test: {}
        })
    })
    it('default return', () => {
        expect(
            filtersReducer(state, {
                type: 'foo'
            })
        ).toEqual(state)
    })
})
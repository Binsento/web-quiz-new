import filterReducers from '../reducers/filterReducers'
import * as t from '../actionTypes'

let state = {
    typeFilter: new Set(['foo', 'bar']),
    test: {}
}

describe('Filter Reducers', () => {
    it('reducer ADD_FILTER_TYPE', () => {
        expect(
            filterReducers(state, {
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
            filterReducers(state, {
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
            filterReducers(state, {
                type: t.CLEAR_FILTER
            })
        ).toEqual({
            typeFilter: new Set(),
            test: {}
        })
    })
    it('default return', () => {
        expect(
            filterReducers(state, {
                type: 'foo'
            })
        ).toEqual(state)
    })
})
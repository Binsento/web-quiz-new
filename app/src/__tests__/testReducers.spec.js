import testsReducers from '../services/testsService/testReducers'
import * as t from '../actionTypes'

describe('Test Reducers', () => {
    it('reducer START_TEST', () => {
        let state = {
            data: new Map([['foo', { test: [0] }]])
        }
        expect(
            testsReducers(state, {
                type: t.START_TEST,
                id: 'foo'
            })
        ).toEqual({
            ...state,
            test: [0],
            number: 0,
            score: 0,
            testDone: false
        })
    })
    it('reducer NEXT_QUESTION', () => {
        let state1 = {
            test: new Array(7),
            number: 3,
            testDone: false
        }
        let state2 = {
            test: new Array(7),
            number: 6,
            testDone: false
        }
        expect(
            testsReducers(state1, {
                type: t.NEXT_QUESTION
            })
        ).toEqual({
            ...state1,
            number: 4
        })
        expect(
            testsReducers(state2, {
                type: t.NEXT_QUESTION
            })
        ).toEqual({
            ...state2,
            testDone: true
        })
    })
    it('reducer TEST_EXIT', () => {
        let state = {
            test: new Array(7),
            number: 6,
            score: 4,
            testDone: true
        }
        expect(
            testsReducers(state, {
                type: t.TEST_EXIT
            })
        ).toEqual({
            ...state,
            number: 0,
            score: 0,
            testDone: false
        })
    })
    it('default return', () => {
        let state = { test: 'test' }
        expect(
            testsReducers(state, {
                type: 'foo'
            })
        ).toEqual(state)
    })
})
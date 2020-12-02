import userReducers from '../reducers/userReducers'
import * as t from '../actionTypes'

Date.now = jest.fn(() => 1500000000000)

describe('User Reducers', () => {
    it('reducer SET_TEST_STATS', () => {
        let state = {
            passed: 1,
            passedTests: { js: {} }
        }
        expect(
            userReducers(state, {
                type: t.SET_TEST_STATS,
                id: 'test'
            })
        ).toEqual({
            passed: 1,
            passedTests: {
                js: {},
                test: {
                    attempts: 0,
                    bestResult: 0,
                    isPerfect: false
                }
            }
        })
    })
    it('reducer UPDATE_TEST_STATS', () => {
        let state = {
            passed: 2,
            passedTests: {
                js: {},
                test: {
                    attempts: 9,
                    bestResult: 3,
                    isPerfect: false
                }
            }
        }
        expect(
            userReducers(state, {
                type: t.UPDATE_TEST_STATS,
                id: 'test',
                score: 5,
                isPerfect: true
            })
        ).toEqual({
            passed: 2,
            passedTests: {
                js: {},
                test: {
                    attempts: 10,
                    bestResult: 5,
                    isPerfect: true
                }
            }
        })
        expect(
            userReducers(state, {
                type: t.UPDATE_TEST_STATS,
                id: 'test',
                score: 2,
                isPerfect: false
            })
        ).toEqual({
            passed: 2,
            passedTests: {
                js: {},
                test: {
                    attempts: 10,
                    bestResult: 3,
                    isPerfect: false
                }
            }
        })
    })
    it('reducer UPDATE_ACHIEVEMENTS_COUNT', () => {
        let state = {
            achievements: 2,
            earnedAchievements: {
                ach1: 500
            }
        }
        expect(
            userReducers(state, {
                type: t.UPDATE_ACHIEVEMENTS_COUNT,
                id: 'ach2'
            })
        ).toEqual({
            achievements: 3,
            earnedAchievements: {
                ach1: 500,
                ach2: Date.now()
            }
        })
    })
    it('default return', () => {
        let state = {
            passed: 1,
            passedTests: { js: {} }
        }
        expect(
            userReducers(state, {
                type: 'foo'
            })
        ).toEqual(state)
    })
})
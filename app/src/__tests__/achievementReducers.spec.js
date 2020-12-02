import {achievementsReducer} from '../services/achievmentsService/achievementsSlice'
import * as t from '../actionTypes'

Date.now = jest.fn(() => 1500000000000)
let state = {
    test: {
        earn: false,
        dateInMs: 0
    },
    stub: {}
}

describe('Achievements Reducers', () => {
    it('reducer NEW_ACHIEVEMENT_EARN', () => {
        expect(
            achievementsReducer(state, {
                type: t.NEW_ACHIEVEMENT_EARN,
                id: 'test'
            })
        ).toEqual({
            test: {
                earn: true,
                dateInMs: Date.now()
            },
            stub: {}
        })
    })
    it('reducer LOAD_ACHIEVEMENT_STATS', () => {
        expect(
            achievementsReducer(state, {
                type: t.LOAD_ACHIEVEMENT_STATS,
                id: 'test',
                date: 1500000000000
            })
        ).toEqual({
            test: {
                earn: true,
                dateInMs: 1500000000000
            },
            stub: {}
        })
    })
    it('default return', () => {
        expect(
            achievementsReducer(state, {
                type: 'foo'
            })
        ).toEqual(state)
    })
})
import * as t from '../../actionTypes'

let initialTestsState = {
    data: [],
    test: [],
    number: 0,
    score: 0,
    doneFetching: false,
    error: false,
    testDone: false
}

export default (state = initialTestsState, action) => {
    switch (action.type) {
        case t.GET_TESTS:
            return {
                ...state,
                data: new Map(),
                doneFetching: false,
                error: false,
            }
        case t.GET_TESTS_SUCCESS:
            return {
                ...state,
                doneFetching: true,
                data: action.tests,
                error: false
            }
        case t.GET_TESTS_FAILURE:
            return {
                ...state,
                doneFetching: true,
                error: true,
            }
        case t.START_TEST:
            return {
                ...state,
                test: state.data.get(action.id).test,
                number: 0,
                score: 0,
                testDone: false
            }
        case t.NEXT_QUESTION:
            if (state.number + 1 < state.test.length) {
                return {
                    ...state,
                    number: state.number + 1,
                }
            } else return {
                ...state,
                testDone: true
            }
        case t.CORRECT_ANSWER:
            return {
                ...state,
                score: state.score + 1
            }
        case t.TEST_EXIT:
            return {
                ...state,
                testDone: false,
                number: 0,
                score: 0,
            }
        default:
            return state
    }
}
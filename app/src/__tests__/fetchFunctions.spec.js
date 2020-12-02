import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { getTypes, getTypesSuccess, getTypesFailure } from '../actionCreators'
import { getTests, getTestsSuccess, getTestsFailure } from '../actionCreators'
import { fetchTypes, fetchTests } from '../initFunctions'
import fetchMock from 'fetch-mock'
import expect from 'expect'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('асинхронный запрос доступных типов с сервера', () => {
    afterEach(() => {
        fetchMock.restore()
    })
    it('вызов в случае успешного запроса', () => {
        fetchMock.once('/types', {
            headers: { 'content-type': 'application/json' },
            body: { data: ['foo', 'bar'] },
        })
        const expectedActions = [getTypes(), getTypesSuccess(new Set(['foo', 'bar']))]
        const store = mockStore({})
        return store.dispatch(fetchTypes('/types'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
    })
    it('вызов в случае ошибки запроса', () => {
        fetchMock.once('/types', {
            headers: { 'content-type': 'application/json' },
            body: { data: 0 },
        })
        const expectedActions = [getTypes(), getTypesFailure()]
        const store = mockStore({})
        return store.dispatch(fetchTypes('/types'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
    })
})

describe('асинхронный запрос тестов с сервера', () => {
    afterEach(() => {
        fetchMock.restore()
    })
    it('вызов в случае успешного запроса', () => {
        fetchMock.once('/tests', {
            headers: { 'content-type': 'application/json' },
            body: { data: [['foo', 'bar']] },
        })
        const expectedActions = [getTests(), getTestsSuccess(new Map([['foo', 'bar']]))]
        const store = mockStore({})
        return store.dispatch(fetchTests('/tests'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
    })
    it('вызов в случае ошибки запроса', () => {
        fetchMock.once('/tests', {
            headers: { 'content-type': 'application/json' },
            body: { data: 0 },
        })
        const expectedActions = [getTests(), getTestsFailure()]
        const store = mockStore({})
        return store.dispatch(fetchTests('/tests'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
    })
})
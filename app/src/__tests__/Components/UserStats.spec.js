import React from 'react'
import { Provider } from 'react-redux'
import UserStats, {UserStats as DumbUserStats} from '../../OtherComponents/UserStats'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'

describe('Тестирование вывода статистики пользователя', () => {
    const initialState = {
        user: {
            passed: 5,
            perfect: 3,
            achievements: 3,
            foo: 5
        }
    }
    const mockStore = configureStore()
    let store, wrapper

    beforeEach(() => {
        store = mockStore(initialState)
        wrapper = mount(
            <Provider store={store}>
                <UserStats />
            </Provider>
        )
    })
    it('рендер обернутого в connect компонента', () => {
        expect(wrapper.find(UserStats)).toHaveLength(1)
    })
    it('проверка соответствия полученных и начальных данных', () => {
        expect(wrapper.find(DumbUserStats).prop('passed')).toEqual(initialState.user.passed)
        expect(wrapper.find(DumbUserStats).prop('perfect')).toEqual(initialState.user.perfect)
        expect(wrapper.find(DumbUserStats).prop('achievements')).toEqual(initialState.user.achievements)
    })
    it('проверка количества отредерненных строк', () => {
        expect(wrapper.find(UserStats).find('span')).toHaveLength(3)
    })
    it('проверка соответствия строк', () => {
        expect(wrapper.find(UserStats).find('span').at(0).text()).toEqual('Пройдено: 5')
        expect(wrapper.find(UserStats).find('span').at(1).text()).toEqual('На отлично: 3')
        expect(wrapper.find(UserStats).find('span').at(2).text()).toEqual('Достижения: 3')
    })
})
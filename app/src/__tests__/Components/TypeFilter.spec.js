import React from 'react'
import { Provider } from 'react-redux'
import TypeFilter, {TypeFilter as DumbTypeFilter} from '../../OtherComponents/TypeFilter'
import { clearFilter, addFilter, removeFilter } from '../../actionCreators'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'

describe('Тестирование кнопок фильтрации тестов', () => {
    const initialState = {
        filter: {
            allTypes: new Set(['foo', 'bar']),
            typeFilter: new Set(['bar'])
        }
    }
    const mockStore = configureStore()
    let store, wrapper

    beforeEach(() => {
        store = mockStore(initialState)
        wrapper = mount(
            <Provider store={store}>
                <TypeFilter />
            </Provider>
        )
    })
    it('рендер обернутого в connect компонента', () => {
        expect(wrapper.find(TypeFilter)).toHaveLength(1)
    })
    it('проверка соответствия полученных и начальных данных', () => {
        expect(wrapper.find(DumbTypeFilter).prop('allTypes')).toEqual(initialState.filter.allTypes)
        expect(wrapper.find(DumbTypeFilter).prop('typeFilter')).toEqual(initialState.filter.typeFilter)
    })
    it('проверка количества отредерненных кнопок', () => {
        expect(wrapper.find(TypeFilter).find('button')).toHaveLength(3)
    })
    it('проверка соответствия надписей', () => {
        expect(wrapper.find(TypeFilter).find('button').at(0).text()).toBe('foo')
        expect(wrapper.find(TypeFilter).find('button').at(1).text()).toBe('bar')
        expect(wrapper.find(TypeFilter).find('button').last().text()).toBe('Сбросить фильтр')
    })
    it('проверка наличия активных классов', () => {
        expect(wrapper.find(TypeFilter).find('button').at(0).hasClass('filter__button_active')).toBeFalsy()
        expect(wrapper.find(TypeFilter).find('button').at(1).hasClass('filter__button_active')).toBeTruthy()
        expect(wrapper.find(TypeFilter).find('button').last().hasClass('filter__button_active')).toBeTruthy()
    })
    it('проверка соответствия выполняемых действий', () => {
        const expectedActions = [addFilter('foo'), removeFilter('bar'), clearFilter()]
        wrapper.find(TypeFilter).find('button').at(0).simulate('click')
        wrapper.find(TypeFilter).find('button').at(1).simulate('click')
        wrapper.find(TypeFilter).find('button').last().simulate('click')
        expect(store.getActions()).toEqual(expectedActions)
    })
})
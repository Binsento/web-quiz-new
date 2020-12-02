import React from 'react'
import AchievementInfo from '../../AchievementComponents/AchievementInfo'
import { shallow } from 'enzyme'

describe('компонент AchievementInfo', () => {
    const info1 = {
        earn: false,
        title: "Начинающий тестер",
        description: "Пройти 3 теста",
        dateInMs: 0
    }
    const info2 = {
        earn: true,
        title: "Отличное начало",
        description: "Пройти тест на 100%",
        dateInMs: 1500000000000
    }

    let wrapper = shallow(<AchievementInfo info={info1} />)
    let wrapper2 = shallow(<AchievementInfo info={info2} />)

    it('рендер компонента', () => {
        expect(wrapper).toHaveLength(1)
        expect(wrapper2).toHaveLength(1)
    })
    it('количество строк', () => {
        expect(wrapper.find('span')).toHaveLength(2)
        expect(wrapper2.find('span')).toHaveLength(2)
    })
    it('вывод элементов', () => {
        expect(wrapper.find('h4').text()).toEqual(info1.title)
        expect(wrapper2.find('h4').text()).toEqual(info2.title)
        expect(wrapper.find('span').last().text()).toBe('Не получено')
        expect(wrapper2.find('span').last().text()).toBe('14 июля 2017 в 05:40')
    })

})
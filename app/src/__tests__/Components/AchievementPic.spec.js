import React from 'react'
import AchievementPic from '../../AchievementComponents/AchievementPic'
import { shallow } from 'enzyme'

describe('компонент AchievementPic', () => {
    let wrapper1 = shallow(<AchievementPic id = {'foo'} />)
    let wrapper2 = shallow(<AchievementPic id = {'bar'} isEarn = {false}/>)
    it('рендер компонента', () => {
        expect(wrapper1).toHaveLength(1)
        expect(wrapper2).toHaveLength(1)
    })
    it('правильная установка свойств', () => {
        expect(wrapper1.find('img').prop('src')).toBe('/img/foo.png')
        expect(wrapper2.find('img').prop('src')).toBe('/img/bar.png')
        expect(wrapper1.find('img').hasClass('achievement_earn')).toBeTruthy()
        expect(wrapper2.find('img').hasClass('achievement_earn')).toBeFalsy()
    })

})
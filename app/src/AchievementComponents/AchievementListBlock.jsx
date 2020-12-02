//Блок, выводящий картинку и инфо нескольких ачивок

import React from 'react'
import AchievementPic from './AchievementPic'
import AchievementInfo from './AchievementInfo'
import PropTypes from 'prop-types'

const AchievementListBlock = ({ entries, infoAll }) =>
    <section className='list'>
        {entries.map(id => <div key={id} className='achievements__frame'>
            <AchievementPic id={id} parent='list' />
            <AchievementInfo info={infoAll[id]} parent='list' />
        </div>)}
    </section>

export default AchievementListBlock

AchievementListBlock.propTypes = {
    entries: PropTypes.array.isRequired,
    infoAll: PropTypes.object.isRequired
}
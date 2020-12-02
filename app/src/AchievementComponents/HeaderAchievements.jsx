//Блок, выводящий ачивки в хеддере

import React from 'react'
import Achievement from './Achievement'
import PropTypes from 'prop-types'

const HeaderAchievements = ({ achievementsIds }) =>
    <div className='header__achievements'>
        {achievementsIds.map((id) => <Achievement key={id} id={id} />)}
    </div>

HeaderAchievements.propTypes = {
    achievementsIds: PropTypes.array.isRequired
}

export default HeaderAchievements
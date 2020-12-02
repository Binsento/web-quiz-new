//вывод информации об ачивке в человеческом формате. Используется в двух местах проекта

import React from 'react'
import PropTypes from 'prop-types'
import { getFullDay, getTimeWithoutSec } from '../dateHandlers'

const AchievementInfo = ({ info: { title, description, earn, dateInMs }, parent = 'header'}) =>
    <div className={`${parent}__achievement_info`}>
        <h4>{title}</h4>
        <span>{description}</span>
        {(earn)
            ? <span>{`${getFullDay(dateInMs)} в ${getTimeWithoutSec(dateInMs)}`}</span>
            : <span>Не получено</span>}
    </div>

AchievementInfo.propTypes = {
    parent: PropTypes.string,
    info: PropTypes.shape ({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        earn: PropTypes.bool.isRequired,
        dateInMs: PropTypes.number.isRequired
    })
}

export default AchievementInfo
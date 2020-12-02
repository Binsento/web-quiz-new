//вывод картинки ачивки по id. Используется в двух местах проекта

import React from 'react'
import PropTypes from 'prop-types'

const AchievementPic = ({id, isEarn = true, parent = 'header'}) => {
    let achClass = `${parent}__achievement_pic` 
    return <img src = {`/img/${id}.png`} alt ={id} className={(isEarn)? `${achClass} achievement_earn`: `${achClass} achievement_not-earn`}></img>
}

AchievementPic.propTypes = {
    id: PropTypes.string.isRequired,
    isEarn: PropTypes.bool,
    parent: PropTypes.string
}

export default AchievementPic
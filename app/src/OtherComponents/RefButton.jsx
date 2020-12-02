//кнопка, которая по умолчанию ведет на главную страницу

import React from 'react'
import '../css/button.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const RefButton = ({refTo = '/', text = 'На главную', additionalClass = '' }) =>
    <Link to={refTo} >
        <button className={`button ${additionalClass}`}>{text}</button>
    </Link>

RefButton.propTypes = {
    refTo: PropTypes.string,
    text: PropTypes.string,
    additionalClass: PropTypes.string
}

export default RefButton
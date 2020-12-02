//сводка о результатах пользователя в цифрах

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const UserStats = ({ passed, perfect, achievements }) =>
    <div className='header__user_info'>
        <span>{`Пройдено: ${passed}`}</span>
        <span>{`На отлично: ${perfect}`}</span>
        <span>{`Достижения: ${achievements}`}</span>
    </div>

UserStats.propTypes = {
    passed: PropTypes.number.isRequired,
    perfect: PropTypes.number.isRequired,
    achievements: PropTypes.number.isRequired
}
const mapStateToProps = ({ user: { passed, perfect, achievements } }) => ({ passed, perfect, achievements })

export default connect(mapStateToProps)(UserStats)
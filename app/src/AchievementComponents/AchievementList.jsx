//Список ачивок, группирующий получено/не получено

import React from 'react'
import '../css/list.css'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AchievementListBlock from './AchievementListBlock'

export const AchievementList = ({ achievements }) => {
    let ids = Object.keys(achievements)
    let earned = ids.filter((id) => achievements[id].earn)
    let notEarned = ids.filter((id) => !achievements[id].earn)
    return (<section className='main'>
        <h2>Полученные достижения</h2>
        <AchievementListBlock entries={earned} infoAll={achievements} />
        <h2>Неполученные достижения</h2>
        <AchievementListBlock entries={notEarned} infoAll={achievements} />
    </section>)
}

AchievementList.propTypes = {
    achievements: PropTypes.object.isRequired
}

const mapStateToProps = ({achievements}) => ({achievements})

export default connect(mapStateToProps)(AchievementList)
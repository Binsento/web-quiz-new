//Компонент конкретной ачивки, который запускает процедуру получения, когда выполнено условие. 
//Библиотека react-hover отрисовывает картинку с инфой по наведению (или ничего, если ориентация устройства портретная)

import React from 'react'
import ReactHover, { Trigger, Hover } from 'react-hover'
import AchievementPic from './AchievementPic'
import AchievementInfo from './AchievementInfo'
import checkAchievement from '../checkAchievement'
import { connect } from 'react-redux'
import { achievementEarn, updateAchievementsCount } from '../actionCreators'
import PropTypes from 'prop-types'

export class Achievement extends React.Component {

    shouldComponentUpdate(nextProps) {
        return (this.props.isFulfiled !== nextProps.isFulfiled ||
        this.props.isEarn !== nextProps.info.isEarn ||
        this.props.isLandscape !== nextProps.isLandscape)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isFulfiled !== this.props.isFulfiled) {
            this.props.achievementEarn()
            this.props.updateAchievementsCount()
        }
    }

    render() {
        let options = {
            followCursor: true,
            shiftX: 10,
            shiftY: 20
        }
        return (this.props.isLandscape)
            ?
            <ReactHover
                options={options}>
                <Trigger type='trigger'>
                    <AchievementPic id={this.props.id} isEarn={this.props.isEarn} />
                </Trigger>
                <Hover type='hover'>
                    <AchievementInfo info={this.props.info} />
                </Hover>
            </ReactHover >
            : null
    }
}

Achievement.propTypes = {
    info: PropTypes.object.isRequired,
    isLandscape: PropTypes.bool.isRequired,
    isEarn: PropTypes.bool.isRequired,
    isFulfiled: PropTypes.bool.isRequired
}

const mapStateToProps = ({achievements, user}, ownProps) => ({
    info: achievements[ownProps.id],
    isLandscape: user.isLandscape,
    isEarn: achievements[ownProps.id].earn,
    isFulfiled: !!user.earnedAchievements[ownProps.id] || checkAchievement(ownProps.id, user)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    achievementEarn: () => dispatch(achievementEarn(ownProps.id)),
    updateAchievementsCount: () => dispatch(updateAchievementsCount(ownProps.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Achievement)


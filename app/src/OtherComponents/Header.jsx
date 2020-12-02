import React from 'react'
import '../css/header.css'
import HeaderAchievements from '../AchievementComponents/HeaderAchievements'
import UserStats from './UserStats'
import RefButton from './RefButton'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


export class Header extends React.Component {
    shouldComponentUpdate(nextProps) {
        return this.props.location.pathname !== nextProps.location.pathname ||
            this.props.userState !== nextProps.userState
    }

    calculateMessage = () => {
        let allAch = this.props.achievementsIds.length
        let earnedAch = Object.keys(this.props.userState.earnedAchievements).length
        let percent = earnedAch / allAch
        switch (percent) {
            case 0: {
                return 'Все еще впереди!'
            }
            case 1: {
                return 'Все достижения получены!'
            }
            default: {
                return (percent > 0.5) ? 'Большая часть позади! Еще чуть-чуть!' : 'Отличное начало! Поднажми!'
            }
        }
    }

    render() {
        let path = this.props.location.pathname
        return <header className='header'>
            {(this.props.userState.isLandscape) ? <UserStats /> : <p>Проходи тесты - зарабатывай достижения</p>}
            {(path !== '/achievements')
                ? <HeaderAchievements achievementsIds={this.props.achievementsIds} />
                : <p>{this.calculateMessage()}</p>
            }
            {(path !== '/achievements')
                ? <RefButton refTo={'/achievements'} text={'Достижения'} additionalClass={'button_header'} />
                : <RefButton additionalClass={'button_header'} />
            }
        </header>
    }
}

const mapStateToProps = state => ({
    userState: state.user,
    achievementsIds: Object.keys(state.achievements)
})

Header.propTypes = {
    achievementsIds: PropTypes.array.isRequired,
    userState: PropTypes.shape({
        isLandscape: PropTypes.bool.isRequired
    })
}

export default withRouter(connect(mapStateToProps)(Header))
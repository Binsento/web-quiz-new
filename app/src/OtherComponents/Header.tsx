import React, {Component} from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { withRouter, RouteComponentProps  } from 'react-router-dom'
import '../css/header.css'
import HeaderAchievements from '../AchievementComponents/HeaderAchievements'
import UserStats from './UserStats'
import RefButton from './RefButton'
import {RootStoreData} from "../services/redux-types";

type Props = PropsFromRedux & RouteComponentProps

export class Header extends Component<Props> {
    calculateMessage = () => {
        let allAch = this.props.achievementsIds.length
        let earnedAch = Object.keys(this.props.earnedAchievements).length
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
        const {pathname} = this.props.location;
        return <header className='header'>
            {(this.props.isLandscape) ? <UserStats /> : <p>Проходи тесты - зарабатывай достижения</p>}
            {(pathname !== '/achievements')
                ? <HeaderAchievements achievementsIds={this.props.achievementsIds} />
                : <p>{this.calculateMessage()}</p>
            }
            {(pathname !== '/achievements')
                ? <RefButton refTo={'/achievements'} text={'Достижения'} additionalClass={'button_header'} />
                : <RefButton additionalClass={'button_header'} />
            }
        </header>
    }
}

const mapState = (state: RootStoreData) => ({
    earnedAchievements: state.user.earnedAchievements,
    isLandscape: state.user.isLandscape,
    achievementsIds: Object.keys(state.achievements),
})

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default withRouter(connector(Header))
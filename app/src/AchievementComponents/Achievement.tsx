//Компонент конкретной ачивки, который запускает процедуру получения, когда выполнено условие. 
//Библиотека react-hover отрисовывает картинку с инфой по наведению (или ничего, если ориентация устройства портретная)

import React, {Component} from 'react'
//@ts-ignore
import ReactHover, { Trigger, Hover } from 'react-hover'
import AchievementPic from './AchievementPic'
import AchievementInfo from './AchievementInfo'
import checkAchievement from '../checkAchievement'
import {connect, ConnectedProps} from 'react-redux'
import { updateAchievementsCount } from '../actionCreators'
import {RootStoreData} from "../services/redux-types";
import {achievementEarn} from "../services/achievmentsService/achievementsSlice";

type OwnProps = {id: string}

type Props = OwnProps & PropsFromRedux

export class Achievement extends Component<Props> {
    shouldComponentUpdate(nextProps: Props) {
        return (this.props.isFulfilled !== nextProps.isFulfilled ||
        this.props.isEarn !== nextProps.info.isEarn ||
        this.props.isLandscape !== nextProps.isLandscape)
    }

    componentDidUpdate(prevProps: Props) {
        if (prevProps.isFulfilled !== this.props.isFulfilled) {
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

const mapState = (state: RootStoreData, ownProps: OwnProps) => ({
    info: state.achievements[ownProps.id],
    isLandscape: state.user.isLandscape,
    isEarn: state.achievements[ownProps.id].earn,
    isFulfilled: Boolean(state.user.earnedAchievements[ownProps.id]) || checkAchievement(ownProps.id, state.user)
})

//Todo диспатч тип
const mapDispatch = (dispatch: any , ownProps: OwnProps) => ({
    achievementEarn: () => dispatch(achievementEarn(ownProps.id)),
    updateAchievementsCount: () => dispatch(updateAchievementsCount(ownProps.id))
})

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Achievement)


//Список ачивок, группирующий получено/не получено

import React, {FC} from 'react'
import '../css/list.css'
import {connect, ConnectedProps} from 'react-redux'
import AchievementListBlock from './AchievementListBlock'
import {RootStoreData} from "../services/redux-types";

type Props = PropsFromRedux;

export const AchievementList: FC<Props> = ({ achievements }) => {
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

const mapState = (state: RootStoreData) => ({achievements: state.achievements})

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(AchievementList)
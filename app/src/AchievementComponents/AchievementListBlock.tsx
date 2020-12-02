//Блок, выводящий картинку и инфо нескольких ачивок

import React, {FC} from 'react'
import AchievementPic from './AchievementPic'
import AchievementInfo from './AchievementInfo'

type Props = {
    entries: string[];
    infoAll: Record<string, {
        title: string;
        description: string;
        earn: boolean;
        dateInMs: string;
    }>
}

const AchievementListBlock: FC<Props> = ({ entries, infoAll }) =>
    <section className='list'>
        {entries.map(id => <div key={id} className='achievements__frame'>
            <AchievementPic id={id} parent='list' />
            <AchievementInfo info={infoAll[id]} parent='list' />
        </div>)}
    </section>

export default AchievementListBlock
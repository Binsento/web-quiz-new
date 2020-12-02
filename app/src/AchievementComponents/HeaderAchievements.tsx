//Блок, выводящий ачивки в хеддере

import React, {FC} from 'react'
import Achievement from './Achievement'

type Props = {
    achievementsIds: string[]
}
const HeaderAchievements: FC<Props> = ({ achievementsIds }) =>
    <div className='header__achievements'>
        {achievementsIds.map((id) => <Achievement key={id} id={id} />)}
    </div>

export default HeaderAchievements
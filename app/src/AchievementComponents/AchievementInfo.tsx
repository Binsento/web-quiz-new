//вывод информации об ачивке в человеческом формате. Используется в двух местах проекта

import React, {FC} from 'react'
import { getFullDay, getTimeWithoutSec } from '../dateHandlers'

//TODO вынести и пересмотреть тип
type Props = {
    info: {
        title: string;
        description: string;
        earn: boolean;
        dateInMs: string;
    },
    parent?: string;
}

const AchievementInfo: FC<Props> = ({ info: { title, description, earn, dateInMs }, parent = 'header'}) =>
    <div className={`${parent}__achievement_info`}>
        <h4>{title}</h4>
        <span>{description}</span>
        {(earn)
            ? <span>{`${getFullDay(dateInMs)} в ${getTimeWithoutSec(dateInMs)}`}</span>
            : <span>Не получено</span>}
    </div>

export default AchievementInfo
//вывод картинки ачивки по id. Используется в двух местах проекта

import React, {FC} from 'react'

type Props = {
    id: string;
    isEarn?: boolean;
    parent?: string
}
const AchievementPic: FC<Props> = ({id, isEarn = true, parent = 'header'}) => {
    let achClass = `${parent}__achievement_pic` 
    return <img src = {`/img/${id}.png`} alt ={id} className={(isEarn)? `${achClass} achievement_earn`: `${achClass} achievement_not-earn`}></img>
}

export default AchievementPic
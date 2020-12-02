import React, {FC} from 'react'
import '../css/button.css'
import cn from 'classnames'
import { Link } from 'react-router-dom'

export type RefButtonProps = {
    refTo?: string;
    text?: string;
    additionalClass?: string;
}

const RefButton: FC<RefButtonProps> = ({refTo = '/', text = 'На главную', additionalClass = '' }) =>
    <Link to={refTo} >
        <button className={cn('button', additionalClass)}>{text}</button>
    </Link>

export default RefButton
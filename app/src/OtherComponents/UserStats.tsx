//сводка о результатах пользователя в цифрах

import React, {FC} from 'react'
import {connect, ConnectedProps} from 'react-redux'
import {RootStoreData} from "../services/redux-types";

type Props = PropsFromRedux;

export const UserStats: FC<Props> = ({ passed, perfect, achievements }) =>
    <div className='header__user_info'>
        <span>{`Пройдено: ${passed}`}</span>
        <span>{`На отлично: ${perfect}`}</span>
        <span>{`Достижения: ${achievements}`}</span>
    </div>

const mapState = (state: RootStoreData) => ({ passed: state.user.passed, perfect: state.user.perfect, achievements: state.user.achievements })

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(UserStats)
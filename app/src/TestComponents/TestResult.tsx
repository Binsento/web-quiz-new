// вывод результатов после окончания вопросов текущего теста

import React, {FC} from 'react'
import {connect, ConnectedProps} from 'react-redux'
import RefButton from '../OtherComponents/RefButton'
import {RootStoreData} from "../services/redux-types";

type Props = PropsFromRedux

export const TestResult: FC<Props> = ({ score, questions }) =>
    (<section className='test'>
        <div className='test__text test__result'>
            <p>{`Правильных ответов ${score}/${questions}`}</p>
            {(score === questions)
                ? (<p>Поздравляем! Тест сдан на отлично!</p>)
                : (<p>Вы ошибались, но не раскрываем карты! Попробуйте еще раз!</p>)
            }
        </div>
        <RefButton />
    </section>)

const mapState = (state: RootStoreData) => ({
    score: state.tests.score,
    questions: state.tests.test.length
})

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(TestResult)
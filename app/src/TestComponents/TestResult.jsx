// вывод результатов после окончания вопросов текущего теста

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RefButton from '../OtherComponents/RefButton'

export const TestResult = ({ score, questions }) =>
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

TestResult.propTypes = {
    score: PropTypes.number,
    questions: PropTypes.number
}

const mapStateToProps = ({tests}) => ({
    score: tests.score,
    questions: tests.test.length
})

export default connect(mapStateToProps)(TestResult)
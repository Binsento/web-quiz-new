//редернит конкретный вопрос теста

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { correctAnswer, nextQuestion } from '../actionCreators'
import RefButton from '../OtherComponents/RefButton'

export const TestQuestion = ({ currentQuestion, correctAnswer, nextQuestion }) => {
    if (currentQuestion) {
        const { question, answers, correct } = currentQuestion
        return (<section className='test'>
            <div className='test__text test__question'>
                <p>{(typeof question === 'string')? question : question.join("\n")}</p>
            </div>
            <ul className='test test__variants'>{
                answers.map((elem, i) =>
                    <li className='test__text test__answer'
                        key={i} id={i + 1}
                        onClick={(event) => {
                            if (event.target.id === correct) {
                                correctAnswer()
                            }
                            nextQuestion()
                        }}>
                        {elem}
                    </li>)}
            </ul>
            <br />
            <RefButton text='Вернуться на главную' />
        </section>)
    }
    else return null
}

TestQuestion.propTypes = {
    currentQuestion: PropTypes.object
}

const mapStateToProps = ({tests}) => ({
    currentQuestion: tests.test[tests.number]
})


export default connect(mapStateToProps, { correctAnswer, nextQuestion })(TestQuestion)
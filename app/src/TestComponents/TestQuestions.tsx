//редернит конкретный вопрос теста

import React, {FC, MouseEvent} from 'react'
import {connect, ConnectedProps} from 'react-redux'
import { correctAnswer, nextQuestion } from '../actionCreators'
import RefButton from '../OtherComponents/RefButton'
import {RootStoreData} from "../services/redux-types";

type Props = PropsFromRedux

export const TestQuestion: FC<Props> = ({ currentQuestion, correctAnswer, nextQuestion }) => {
    if (currentQuestion) {
        const { question, answers , correct } = currentQuestion
        return (<section className='test'>
            <div className='test__text test__question'>
                <p>{(typeof question === 'string')? question : question.join("\n")}</p>
            </div>
            <ul className='test test__variants'>{
                //TODO переделать эти костыли
                answers.map((elem: string, i: number) =>
                    <li className='test__text test__answer'
                        key={i} id={(i + 1).toString()}
                        onClick={(event: MouseEvent<HTMLLIElement> & {target: {id: string}} ) => {
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

const mapState = (state: RootStoreData) => ({
    currentQuestion: state.tests.test[state.tests.number]
})

const mapDispatch = { correctAnswer, nextQuestion }

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(TestQuestion)
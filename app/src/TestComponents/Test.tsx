//Основной компонент теста - запускающий, записывающий состояние после окончания, сбрасывающий при выходе

import React, {Component} from 'react'
import '../css/test.css'
import {connect, ConnectedProps} from 'react-redux'
import { RouteComponentProps } from 'react-router';
import { startTest, testExit } from '../actionCreators'
import { setTestStats, updateTestStats, updatePassedCount, updatePerfectCount } from '../actionCreators'
import TestQuestion from './TestQuestions'
import TestResult from './TestResult'
import NotFound from '../OtherComponents/NotFound'
import {RootStoreData} from "../services/redux-types";

type Props = PropsFromRedux

export class Test extends Component<Props> {
    componentDidMount() {
        if (this.props.testExist) {
            this.props.startTest(this.props.id)
            if (!this.props.testStats) {
                this.props.setTestStats(this.props.id)
            }
        }
    }
    componentDidUpdate(prevProps: Props) {
        if (prevProps.testDone !== this.props.testDone) {
            let isPerfect = this.props.score === this.props.questions
            let currentRunStats = [this.props.id, this.props.score, isPerfect]
            if (isPerfect && !(this.props.testStats.isPerfect)) {
                this.props.updatePerfectCount()
            }
            if (!this.props.testStats.attempts) {
                this.props.updatePassedCount()
            }
            this.props.updateTestStats(...currentRunStats)
        }
    }
    componentWillUnmount() {
        this.props.testExit()
    }
    render() {
        if (this.props.testExist) {
            return (!this.props.testDone)
                ? <TestQuestion />
                : <TestResult />
        } else return <NotFound />
    }
}

const mapState = (state: RootStoreData, ownProps: RouteComponentProps<{ id: string }>) => {
    const id = ownProps.match.params.id || ''
    return {
        id,
        testExist: state.tests.data.has(id),
        testDone: state.tests.testDone,
        testStats: state.user.passedTests[id],
        score: state.tests.score,
        questions: state.tests.test.length
    }
}

const mapDispatch = { startTest, testExit, setTestStats, updateTestStats, updatePassedCount, updatePerfectCount }

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Test)
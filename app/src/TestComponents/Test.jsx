//Основной компонент теста - запускающий, записывающий состояние после окончания, сбрасывающий при выходе

import React from 'react'
import '../css/test.css'
import { connect } from 'react-redux'
import { startTest, testExit } from '../actionCreators'
import { setTestStats, updateTestStats, updatePassedCount, updatePerfectCount } from '../actionCreators'
import PropTypes from 'prop-types'
import TestQuestion from './TestQuestions'
import TestResult from './TestResult'
import NotFound from '../OtherComponents/NotFound'

export class Test extends React.Component {
    componentDidMount() {
        if (this.props.testExist) {
            this.props.startTest(this.props.id)
            if (!this.props.testStats) {
                this.props.setTestStats(this.props.id)
            }
        }
    }
    componentDidUpdate(prevProps) {
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

Test.propTypes = {
    id: PropTypes.string.isRequired,
    testExist: PropTypes.bool.isRequired,
    testDone: PropTypes.bool.isRequired,
    testStats: PropTypes.object,
    score: PropTypes.number,
    questions: PropTypes.number
}

const mapStateToProps = ({ user, tests }, {match}) => ({
    id: match.params.id,
    testExist: tests.data.has(match.params.id),
    testDone: tests.testDone,
    testStats: user.passedTests[match.params.id],
    score: tests.score,
    questions: tests.test.length
})

export default connect(mapStateToProps, { startTest, testExit, setTestStats, updateTestStats, updatePassedCount, updatePerfectCount })(Test)
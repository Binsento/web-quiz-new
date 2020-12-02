//создает список ссылок на тесты, перебирая загруженные тесты и проверяя их прохождение

import React from 'react'
import '../css/card.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import TestCard from './TestCard'

export const TestList = ({ data, types, passed }) => {
    let arr = []
    data.forEach((value, key) => {
        if (types.has(value.type) || types.size === 0 || ((!value.type)&&types.has('Не указан'))) {
            let message = (passed[key] === undefined)
                ? "Тест еще не пройден"
                : (passed[key].isPerfect)
                    ? "Тест пройден на 100%"
                    : `Ваш рекорд: ${passed[key].bestResult}`
            arr.push(<Link key={key} to={`/test/${key}`}>
                <TestCard testInfo={value} message={message} />
            </Link>)
        }
    })
    return <div className="mainpage__tests">{arr}</div>
}

TestList.propTypes = {
    data: PropTypes.instanceOf(Map).isRequired,
    types: PropTypes.instanceOf(Set).isRequired,
    passed: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    data: state.tests.data,
    types: state.filter.typeFilter,
    passed: state.user.passedTests
})

export default connect(mapStateToProps)(TestList)
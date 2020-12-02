//создает список ссылок на тесты, перебирая загруженные тесты и проверяя их прохождение

import React, {FC} from 'react'
import '../css/card.css'
import { Link } from 'react-router-dom'
import {connect, ConnectedProps} from 'react-redux'
import TestCard from './TestCard'
import {RootStoreData} from "../services/redux-types";
import {TestData} from "../types";

type Props = PropsFromRedux

export const TestList: FC<Props> = ({ data, types, passed }) => {
    let arr: React.ReactNode[] = []
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

const mapState = (state: RootStoreData) => ({
    data: state.tests.data as TestData[],
    types: state.filter.typeFilter,
    passed: state.user.passedTests
})

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(TestList)
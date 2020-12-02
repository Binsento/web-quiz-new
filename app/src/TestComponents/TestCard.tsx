// выводит информацию по конкретному тесту

import React, {FC} from 'react'
import {TestData} from "../types";

type Props = {
    testInfo: TestData;
    message: string;
}

const TestCard: FC<Props> = ({ testInfo: { type = 'Не указан', title, description, level = 'не указана', test }, message = '' }) =>
    <section className='main__card'>
        <span className="main__card_type">{type}</span>
        <span className="main__card_title">{title}</span>
        <span>{description}</span>
        <span>{`Сложность: ${level}`}</span>
        <span>{`Вопросов: ${test.length}`}</span>
        <span className="main__card_score">{message}</span>
    </section>

export default TestCard
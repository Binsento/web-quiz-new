// выводит информацию по конкретному тесту

import React from 'react'
import PropTypes from 'prop-types'

const TestCard = ({ testInfo: { type = 'Не указан', title, description, level = 'не указана', test }, message = '' }) =>
    <section className='main__card'>
        <span className="main__card_type">{type}</span>
        <span className="main__card_title">{title}</span>
        <span>{description}</span>
        <span>{`Сложность: ${level}`}</span>
        <span>{`Вопросов: ${test.length}`}</span>
        <span className="main__card_score">{message}</span>
    </section>

TestCard.propTypes = {
    testInfo: PropTypes.shape({
        type: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        level: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        test: PropTypes.array.isRequired,
    }),
    message: PropTypes.string
}

export default TestCard
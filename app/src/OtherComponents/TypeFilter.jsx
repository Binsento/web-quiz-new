//компонент, отрисовывающий кнопки доступных типов, включающих фильтры по ним

import React from 'react'
import '../css/filter.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { clearFilter, addFilter, removeFilter } from '../actionCreators'

export const TypeFilter = (props) => {
    const toggleFilter = (type) => () => {
        props.typeFilter.has(type)
            ? props.removeFilter(type)
            : props.addFilter(type)
    }
    return <div className="mainpage__filter">
        <span key={'desc'}>Показать только:</span>
        {Array.from(props.allTypes).map((value) =>
            <button key={value}
                onClick={toggleFilter(value)}
                className={`filter__button${props.typeFilter.has(value) ? ' filter__button_active' : ''}`}>
                {value}
            </button>)}
        < button key={'clear'}
            onClick={props.clearFilter}
            className={`filter__button${props.typeFilter.size ? ' filter__button_active' : ''}`}>
            Сбросить фильтр
        </button>
    </div >
}

TypeFilter.propTypes = {
    allTypes: PropTypes.instanceOf(Set).isRequired,
    typeFilter: PropTypes.instanceOf(Set).isRequired
}

const mapStateToProps = ({ filter: { allTypes, typeFilter } }) => ({ allTypes, typeFilter })

export default connect(mapStateToProps, { clearFilter, addFilter, removeFilter })(TypeFilter)
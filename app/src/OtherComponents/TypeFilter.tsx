//компонент, отрисовывающий кнопки доступных типов, включающих фильтры по ним

import React, {FC} from 'react'
import '../css/filter.css'
import {connect, ConnectedProps} from 'react-redux'
import { clearFilter, addFilter, removeFilter } from '../actionCreators'
import {RootStoreData} from "../services/redux-types";

type Props = PropsFromRedux

export const TypeFilter:FC<Props>  = (props) => {
    const toggleFilter = (type: string) => () => {
        props.typeFilter.has(type)
            ? props.removeFilter(type)
            : props.addFilter(type)
    }
    return <div className="mainpage__filter">
        <span key={'desc'}>Показать только:</span>
        {Array.from(props.allTypes).map((value: string) =>
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

const mapState = (state: RootStoreData) => ({ allTypes: state.filter.allTypes, typeFilter: state.filter.allTypes })

const mapDispatch = { clearFilter, addFilter, removeFilter }

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(TypeFilter)
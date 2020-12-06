//компонент, отрисовывающий кнопки доступных типов, включающих фильтры по ним

import React, {FC} from 'react'
import '../css/filter.css'
import {connect, ConnectedProps} from 'react-redux'
import { clearFilters, addFilter, removeFilter } from '../services/filterService/filtersSlice'
import {RootStoreData} from "../services/redux-types";

type Props = PropsFromRedux

export const TypeFilter:FC<Props>  = ({allTypes, typeFilter, clearFilters, addFilter, removeFilter}) => {
    const toggleFilter = (type: string) => () => {
        typeFilter.has(type)
            ? removeFilter(type)
            : addFilter(type)
    }
    return <div className="mainpage__filter">
        <span key={'desc'}>Показать только:</span>
        {Array.from(allTypes).map((value: string) =>
            <button key={value}
                onClick={toggleFilter(value)}
                className={`filter__button${typeFilter.has(value) ? ' filter__button_active' : ''}`}>
                {value}
            </button>)}
        < button key={'clear'}
            onClick={clearFilters}
            className={`filter__button${typeFilter.size ? ' filter__button_active' : ''}`}>
            Сбросить фильтр
        </button>
    </div >
}

const mapState = (state: RootStoreData) => ({ allTypes: state.filter.allTypes, typeFilter: state.filter.allTypes })

const mapDispatch = { clearFilters, addFilter, removeFilter }

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(TypeFilter)
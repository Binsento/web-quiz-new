import React from 'react'

const Preloader = () =>
    <div className={'wrapper'}>
        <h1>Загрузка...</h1>
        <img src={`/img/loading.png`} className='image image__preloader' alt='Загрузка'></img>
    </div>

export default Preloader

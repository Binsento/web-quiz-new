import React from 'react'
import '../css/main.css'
import TypeFilter from './TypeFilter'
import TestList from '../TestComponents/TestList'

const MainPage = () =>
    <section className="mainpage">
        <TypeFilter />
        <TestList />
    </section>


export default MainPage
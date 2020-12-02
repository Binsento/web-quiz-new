import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './MainPage'
import AchievementList from '../AchievementComponents/AchievementList'
import TestPage from '../TestComponents/TestPage'
import NotFound from './NotFound'

const Routing = () =>
    <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/achievements' component={AchievementList} />
        <Route path='/test/' component={TestPage} />
        <Route component={NotFound} />
    </Switch>

export default Routing
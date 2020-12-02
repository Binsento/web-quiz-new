import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Test from './Test'
import NotFound from '../OtherComponents/NotFound'

const TestPage = () => (
    <Switch>
        <Route exact path='/test' component={NotFound} />
        <Route path='/test/:id' component={Test} />
    </Switch>
)

export default TestPage
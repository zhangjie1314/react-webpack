import React from 'react';
import {Router, Route, IndexRoute, history} from 'react-router';

import Nav from 'comps/nav';
import List from 'comps/list';
import Info from 'comps/info';
import NoMatch from 'comps/404';
import Index from 'comps/header';
import Home from 'comps/home';

export default class Routes extends React.Component{
    render(){
        return (
            <Router history={history}>
                <Route path="/" component={Nav}>
                    <IndexRoute component={Index}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/list" component={List}/>
                    <Route path="/list/:id" component={Info}/>
                    <Route path="*" component={NoMatch}/>
                </Route>
            </Router>
        );
    }
}
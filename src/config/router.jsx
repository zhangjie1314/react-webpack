import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Nav from '../companies/nav'
import List from '../companies/list'
import Info from '../companies/info'
import Home from '../companies/home'

export default class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Nav />
                    <Route exact path='/' component={Home} />
                    <Route exact path='/list' component={List} />
                    <Route path='/list/:id' component={Info} />
                </div>
            </BrowserRouter>
        )
    }
}

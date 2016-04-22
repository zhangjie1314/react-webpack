import React from 'react';
import {render} from 'react-dom';
import {Router, Link, Route, browserHistory} from 'react-router';

import Login from 'comps/login';

require('less/app.less');

class App extends React.Component {
    render(){
        return (
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/login" activeClassName="active">Login</Link>
            </div>
        );
    }
}

class NoMatch extends React.Component {
    render(){
        return (<h1>未找到页面！</h1>);
    }
}

const routes = (
  <Route path="/" component={App}>
    <Route path="/login" component={Login}/>
    <Route path="*" component={NoMatch}/>
  </Route>
);

render(
    <Router history={browserHistory}>{routes}</Router>,
    document.body
);
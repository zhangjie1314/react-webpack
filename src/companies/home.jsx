import React from 'react';
import Banner from 'comps/banner';
import List from 'comps/list';

export default class NoMatch extends React.Component {
    render(){
        return (
            <div>
                <Banner />
                <List />
            </div>
        );
    }
}
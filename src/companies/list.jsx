import React from 'react';
import {Link} from 'react-router';

class List extends React.Component {
    render() {
        return(
            <ul>
                <li key={1}><Link to="/list/1">item1</Link></li>
                <li key={2}><Link to="/list/2">item2</Link></li>
            </ul>
        );
    }
};

export default List;
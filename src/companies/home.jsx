import React from 'react'
import Banner from '../companies/banner'
import List from '../companies/list'
import Content from '../companies/content'

export default class NoMatch extends React.Component {
    render() {
        return (
            <Content>
                <Banner />
                <List />
            </Content>
        )
    }
}

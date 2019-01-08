import React from 'react'
import Content from '../companies/content'

class Login extends React.Component {
    componentWillMount(){
        console.log(this.props)
    }
    render() {
        const { match } = this.props
        return (
            <Content>
                <h1>title {match.params.id}</h1>
            </Content>
        )
    }
}

export default Login

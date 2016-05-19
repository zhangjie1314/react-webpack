import React from 'react';

class Login extends React.Component {
    render() {
        return(
            <section>
                <h1>title { this.props.params.id }</h1>
            </section>
        );
    }
};

export default Login;
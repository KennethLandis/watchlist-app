import React, { Component } from 'react';
import SignIn from './Sign-In';

class Home extends Component {
    render() {
        return (
            <main className="main">
                <p className="content">
                    Insert block about the purpose of app!
                </p>
                <SignIn className="content" history = {this.props.history}></SignIn>
                <p>Demo Information for Sign in:<br></br>
                    user name: test1<br></br>
                    password: Thinkful
                </p>
            </main>
        )
    }
}

export default Home;
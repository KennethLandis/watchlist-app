import React, { Component } from 'react';
import SignIn from './Sign-In';

class Home extends Component {
    render() {
        return (
            <main className="main">
                <SignIn className="content" history = {this.props.history}></SignIn>
                <p className="content">
                    Welcome to watchlist!  A new app designed to help you <br></br>
                    keep track of movies that you have been recommeneded. <br></br>
                    Create your account below and use the search to be able to add<br></br>
                    new movies to your account so you won't forget any movies you want<br></br>
                    to be able to watch in the future!
                </p>
                <p>Demo Information for Sign in:<br></br>
                    user name: test1<br></br>
                    password: Thinkful
                </p>
            </main>
        )
    }
}

export default Home;
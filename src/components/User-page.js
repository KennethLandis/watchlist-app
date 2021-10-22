import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WatchlistContext from '../WatchlistContext';

class UserPage extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = WatchlistContext;

    signOut = () => {
        this.context.signOut();
        this.props.history.push('/')
    }

    render() {
        const client = this.props.match.params
        const clients = this.context.clients
        const list = this.context.list

        return (
            <section className='main'>
                <h3>Welcome {client.client_name}! Manage your watchlist here!</h3>
                <button className='sign-out' type='button' onClick={() => this.signOut()}>Sign Out</button>
            </section>
        )
    }
}

export default UserPage;
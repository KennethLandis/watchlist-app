import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WatchlistContext from '../WatchlistContext';
import Userlist from './User-list';


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

    search = () => {
        this.props.history.push('/search')
    }

    render() {
        const client = this.props.match.params
        const clients = this.context.clients
        const list = this.context.list
        console.log(this.context.list)
        return (
            <section className='main'>
                <h3>Welcome {client.client_name}! Manage your watchlist here!</h3>
                <button className='sign-out' type='button' onClick={() => this.signOut()}>Sign Out</button>
                <button className='Search' type='button' onClick={() => this.search()}>Search for new titles</button>
                <Userlist list={this.context.list} addMovie={newMovie => this.addMovie(newMovie)}/>
            </section>
        )
    }
}

export default UserPage;
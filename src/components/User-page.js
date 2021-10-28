import React, { Component } from 'react';
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

    deleteMovie(movieId) {
        this.context.deleteMovie(movieId)
    }

    render() {
        const client = this.props.match.params
        const list = this.context.list
        return (
            <section className='main'>
                <h3>Welcome {client.client_name}! Manage your watchlist here!</h3>
                <button className='sign-out' type='button' onClick={() => this.signOut()}>Sign Out</button>
                <button className='Search' type='button' onClick={() => this.search()}>Search for new titles</button>
                <Userlist list={list} deleteMovie={movieId => this.deleteMovie(movieId)}/>
            </section>
        )
    }
}

export default UserPage;
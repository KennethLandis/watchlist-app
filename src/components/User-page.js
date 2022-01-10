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

    componentDidMount() {
        const api_url = process.env.REACT_APP_API_URL
        fetch(`${api_url}/movies/${this.context.targetClient.id}`)
        .then(response => {
            if(!response.ok) {
                return response.json().then(error => {
                    throw error
                })
            }
            return response.json()
        })
        .then(data => {
            this.context.setList(data)
        })
        .catch(error => {
            console.error(error)
        })
      }

    signOut = () => {
        this.context.signOut();
        this.props.history.push('/')
    }

    search = () => {
        this.props.history.push('/search')
    }

    deleteMovie(movieId) {
        const api_url = process.env.REACT_APP_API_URL
        fetch(`${api_url}/movies/delete/${movieId}`, {
            method: `DELETE`
        })
        .then(response => {
            if(!response.ok) {
                return response.json().then(error => {
                    throw error
                })
            }
            return response
        })
        .then(data => {
            this.context.deleteMovie(movieId)
        })
        .catch(error => {
            console.error(error)
        })
        alert('Movie Removed!')
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
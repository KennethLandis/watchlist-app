import React, {Component} from 'react';
import Searchbar from './Searchbar';
import Results from './Results';
import WatchlistContext from '../WatchlistContext';

class Searchpage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            search: "",
            list: []
        }
    }
    static contextType = WatchlistContext

    handleSubmit(e) {
        e.preventDefault();
        const apiKey = process.env.REACT_APP_API_KEY;
        const url = `https://imdb-api.com/en/API/SearchMovie/${apiKey}/${this.state.search}`
        console.log(url)
        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({
                list: response.results
            }))
    }

    addMovie(newMovie) {
        this.context.addMovie(newMovie)
    }

    setSearch(search) {
        this.setState({
            search
        });
    }

    home = () => {
        const user = this.context.targetClient.client_name;
        console.log(user)
        this.props.history.push(`/user/${user}`)
    }

    render() {
        console.log(this.state.list)
        return(
            <div className="main">
                <button className='home' type='button' onClick={() => this.home()}>Home</button>
                <Searchbar setSearch={search => this.setSearch(search)} handleSubmit={e => this.handleSubmit(e)}/>
                <Results list={this.state.list} addMovie={newMovie => this.addMovie(newMovie)}/>
            </div>
        );
    }
}

export default Searchpage;
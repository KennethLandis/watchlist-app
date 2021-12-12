import React, { Component } from 'react';
import { Route } from 'react-router';
import './App.css';
import Home from './components/Home';
import WatchlistContext from './WatchlistContext'
import UserPage from './components/User-page';
import SignUp from './components/Sign-up'
import Searchpage from './components/Search-page';

class App extends Component {
  state = {
    clients: [],
    list: [],
    targetClient: []
  }

  componentDidMount() {
    const api_url = process.env.REACT_APP_API_URL
    Promise.all([
      fetch(`${api_url}/clients`),
      fetch(`${api_url}/movies`)
    ])
    .then(([Res1, Res2]) => {
      if (!Res1.ok)
        return Res1.json().then(e => Promise.reject(e))
      if (!Res2.ok)
        return Res2.json().then(e => Promise.reject(e))
      return Promise.all([Res1.json(), Res2.json()]);
    })
    .then(([clients1, list1]) => this.setState({
      clients: clients1,
      list: list1
    }))
  }

  setList = newList => {
    this.setState({
      list: newList
    })
  }
  
  setClient = newClient => {
    this.setState({
      targetClient: newClient
    })
  }

  addMovie = newMovie => {
    const newList = this.state.list
    newList.push(newMovie)
    this.setState({
      list: newList
    })
  }

  signOut = () => {
    this.setState({
      targetClient: [],
      list: []
    })
  }

  addClient = newClient => {
    const newClients = this.state.clients
    newClients.push(newClient)
    this.setState({
      clients: newClients
    })
  }

  deleteMovie = movieId => {
    const newList = this.state.list.filter(movie =>
      movie.id !== movieId)
    this.setState({
      list: newList
    })
  }

  render() {
    const contextValue = {
      setList: this.setList,
      clients: this.state.clients,
      targetClient: this.state.targetClient,
      setClient: this.setClient,
      signOut: this.signOut,
      list: this.state.list,
      addClient: this.addClient,
      addMovie: this.addMovie,
      deleteMovie: this.deleteMovie
    }
    
    return (
      <WatchlistContext.Provider value={contextValue}>
      <div className="App">
        <header className="App-header">
          <h1>
            Watchlist
          </h1>
        </header>
        <Route
          exact
          key={'/'}
          path={'/'}
          component={Home}
        />
        <Route
          exact
          key={'/user/:client_name'}
          path={'/user/:client_name'}
          component={UserPage}
        />
        <Route
          exact
          key={'/signup'}
          path={'/signup'}
          component={SignUp}
        />
        <Route
          exact
          key={'/search'}
          path={'/search'}
          component={Searchpage}
        />
        <footer className="footer">
            Kenneth Landis ©
          </footer>
      </div>
      </WatchlistContext.Provider>
    );
  };
};

export default App;

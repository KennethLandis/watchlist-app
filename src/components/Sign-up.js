import React, { Component } from 'react';
import WatchlistContext from '../WatchlistContext';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            client_name: {
                value: '',
                touched: false
            },
            user_password: {
                value: '',
                touched: false
            },
            re_pass: {
                value: '',
                touched: false
            }
        }
    }
    static contextType = WatchlistContext;

    updateName(client_name) {
        this.setState({ client_name: { value: client_name, touched: true}})
    }

    updatePassword(user_password) {
        this.setState({ user_password: { value: user_password, touched: true}})
    }

    updateRe_pass(re_pass) {
        this.setState({ re_pass: { value: re_pass, touched: true}})
    }

    addClient(newClient, addClient) {
        addClient(newClient)
    }

    handleSubmit(e) {
        e.preventDefault();
        const newClient = {
            client_name: e.target['client_name'].value,
            user_password: e.target['password'].value
        }
        this.addClient(newClient, this.context.addClient)
        this.props.history.push('/');
        alert('User Created! Now you can sign in.')
    }

    validateName() {
        const name = this.state.client_name.value.trim();
        if (name.length === 0) {
            return "Name is required";
        }
    }

    validatePassword() {
        const pass = this.state.user_password.value.trim();
        const pass2 = this.state.re_pass.value.trim();
        if (pass.length === 0) {
            return "Password is required"
        }
        if (pass2.length === 0) {
            return "Re-type Password here"
        }
        if (pass2 !== pass) {
            return "Passwords must match"
        }
    }

    render() {
        return (
            <form className = "main" onSubmit={e => this.handleSubmit(e)}>
                <h2>Sign up</h2>
                <div className="form group">
                    <label htmlFor="client_name">Username: </label>
                    <input type="text" name="client_name" onChange={e => this.updateName(e.target.value)}></input><br></br>
                    {this.state.client_name.touched}
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" onChange={e => this.updatePassword(e.target.value)}></input><br></br>
                    {this.state.user_password.touched}
                    <label htmlFor="re_pass">Retype Password: </label>
                    <input type="text" name="re_pass" onChange={e => this.updateRe_pass(e.target.value)}></input><br></br>
                    {this.state.re_pass.touched}
                </div>
                <button type="submit" disabled={this.validateName() || this.validatePassword()}>Submit</button>
            </form>
        )
    }
}

export default SignUp;
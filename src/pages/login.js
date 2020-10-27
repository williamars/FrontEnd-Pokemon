import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {username: '', password: ''}
        }   
        this.handleChange = this.handleChange.bind(this)
        this.doLogin = this.doLogin.bind(this)
    }

    doLogin() {
        console.log(this.state.user.username)
        console.log(this.state.user.password)
    }

    
    render() {
        return(
            <div className='Login'>
                <ol>
                    <li>
                        <label>Username</label>
                        <input type='text' name='username' value={this.state.user.username} onChange={this.handleChange}/>
                    </li>
                    <li>
                        <label>Senha</label>
                        <input name='password' value={this.state.user.password} onChange={this.handleChange}/>
                    </li>
                    <li>
                        <button onClick={this.doLogin}>Login</button>
                    </li>
                </ol>
            </div>
        );
    }

    handleChange(event) {
        var handleState = (state, event) => {
        state.user[event.target.name] = event.target.value
        return state
        }
        this.setState(handleState(this.state, event))
    }
}
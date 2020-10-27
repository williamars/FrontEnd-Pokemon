import React, { Component } from 'react'
import axios from 'axios'
import Layout from "../components/layout"
import "../components/layout.css"

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
            <div className="loginB">
                <div className='loginBox'>
                    <ul>
                        <li>
                            <input className='input' type='text' placeholder='Enter Username' name='username' value={this.state.user.username} onChange={this.handleChange}/>
                        </li>
                        <li>
                            <input className='input' type='password' name='password' placeholder='Enter Password' value={this.state.user.password} onChange={this.handleChange}/>
                        </li>
                        <li>
                            <button onClick={this.doLogin}>Login</button>
                        </li>
                    </ul>
                </div>
                
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
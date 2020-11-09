import React, { Component } from 'react'
import axios from 'axios'
import { Link } from "gatsby"
import "../components/layout.css"
import { Redirect } from 'react-router-dom'
//import {useDispatch} from 'react-redux';
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
        // Fazer o código do login quando o back tiver pronto
        console.log(this.state.user.username)
        console.log(this.state.user.password)
        axios.post('https://backend-pokemon.herokuapp.com/users/login', this.state.user)
        .then(resp=> {
            console.log(resp.status)
            if(Math.floor(resp.status/100) === 2) {
                this.setState((state) => {
                return {
                    user: {username: ''},
                    redirectToReferrer: true
                }
                })
                return;
            }
            console.log(resp)
        }).catch(erro => console.log(erro))
    }

    //const dispatch = useDispatch();
    
    render() {
        if(this.state.redirectToReferrer === true) {
            return(
                    <Redirect to='/battle'/>
            )
        }
        return(
            <div className="loginB">
                <div className='control loginBox is-rounded'>
                    <ul>
                        <li className='block'>
                            <p className='is-size-3 has-text-weight-semibold has-text-primary'>Login</p>
                        </li>
                        <li className='block'>
                            <input className={`input has-background-info-light is-medium ${this.state.user.username.length ? '' : 'is-danger'}`} type='text' placeholder='Enter Username' name='username' value={this.state.user.username} onChange={this.handleChange}/>
                        </li>
                        <li className='block'>
                            <input className={`input has-background-info-light is-medium ${this.state.user.password.length ? '' : 'is-danger'}`} type='password' name='password' placeholder='Enter Password' value={this.state.user.password} onChange={this.handleChange}/>
                        </li>
                        <li className='block'>
                            <button className='button' onClick={this.doLogin}>Login</button>
                        </li>
                        <li className='block'>
                        <Link to="/cadastro/">Não tem conta? Cadastre-se</Link> <br/>
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
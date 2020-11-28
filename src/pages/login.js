import React, { Component } from 'react'
import axios from 'axios'
import "../components/layout.css"
import { Redirect } from '@reach/router'
import {setUserData} from '../register/actions'
import {useDispatch} from 'react-redux';
import {PokedexPage} from './pokedex'
import { Link } from "gatsby"
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
        axios.post('http://localhost:3000/users/login', this.state.user)
        .then(resp=> {
            console.log(resp.status)
            if(Math.floor(resp.status/100) === 2) {
                
                console.log(resp.data)
                this.setState((state) => {
                return {
                    // setUser(user, 'id');
                    user: {username: ''},
                    redirectToReferrer: true
                }
                })
            }
            console.log(resp)
        }).catch(erro => console.log(erro))
    }

    
    render() {

    if(this.state.redirectToReferrer === true) {
        var button_continue =         
        <Link
        to="/pokedex"
        state={{
          idUser: this.state.userId,
        }}
        >
        Sucesso! Clique aqui para entrar.
        </Link>}
    else{
        var button_continue =<div></div>
    
    }
        
        return(
            <div className="loginB">
                <div className='control loginBox is-rounded'>
                    <ul>
                        <li className='block'>
                            <p className='is-size-3 has-text-weight-semibold has-text-primary'>Login</p>
                        </li>
                        <li className='block'>
                            <input type='text' placeholder='Enter Username' name='username' value={this.state.user.username} onChange={this.handleChange}/>
                        </li>
                        <li className='block'>
                            <input type='password' name='password' placeholder='Enter Password' value={this.state.user.password} onChange={this.handleChange}/>
                        </li>
                        <li className='block'>
                            <button className='button' onClick={this.doLogin}>Login</button>
                        </li>
                        <li className='block'>
                            {button_continue}
                        </li>
                        <li>
                            <a className='button' href='/cadastro'>Cadastro</a>
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
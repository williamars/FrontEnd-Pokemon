import React, { Component } from 'react'
import axios from 'axios'
import "../components/layout.css"
import { Redirect } from '@reach/router'

export default class Cadastro extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {username: '', password: ''},
        }   
        this.handleChange = this.handleChange.bind(this)
        this.doCadastro = this.doCadastro.bind(this)
    }

    doCadastro() {
        axios.post('http://localhost:3000/users', this.state.user)
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
    
    render() {
        if(this.state.redirectToReferrer === true) {
            var button_continue = <a className='button' href='/'>Cadastro feito com sucesso, clique para fazer login</a>
        }
        else{
            var button_continue =<div></div>
        
        }

        return(
            <div className="loginB">
                <div className='control loginBox is-rounded'>
                    <ul>
                        <li className='block'>
                            <p className='is-size-3 has-text-weight-semibold has-text-primary'>Cadastro</p>
                        </li>
                        <li className='block'>
                            <input type='text' placeholder='Enter Username' name='username' value={this.state.user.username} onChange={this.handleChange} required/>
                        </li>
                        <li className='block'>
                            <input type='password' name='password' placeholder='Enter Password' value={this.state.user.password} onChange={this.handleChange} required/>
                        </li>
                        <li className='block'>
                            <button className='button' onClick={this.doCadastro}>Cadastre</button>
                        </li>
                        <li>
                            {button_continue}
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
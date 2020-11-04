import React, { Component } from 'react'
import axios from 'axios'
import "../components/layout.css"

export default class Cadastro extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {username: '', password: ''}
        }   
        this.handleChange = this.handleChange.bind(this)
        this.doCadastro = this.doCadastro.bind(this)
    }

    doCadastro() {
        // Fazer o código do login quando o back tiver pronto
        console.log(this.state.user.username)
        console.log(this.state.user.password)
        axios.post('https://backend-pokemon.herokuapp.com/users', this.state.user).then(resp=> {
            if(Math.floor(resp.status/100) === 2) {
            this.setState((state) => {
            return {
            lista: [...state.lista, state.usuario],
            usuario: {username: ''}
            }
            })
            return;
           
            
        })
    }

    
    render() {
        return(
            <div className="loginB">
                <div className='control loginBox is-rounded'>
                    <ul>
                        <li className='block'>
                            <p className='is-size-3 has-text-weight-semibold has-text-primary'>Cadastro</p>
                        </li>
                        <li className='block'>
                            <input className='input has-background-info-light is-medium' type='text' placeholder='Enter Username' name='username' value={this.state.user.username} onChange={this.handleChange}/>
                        </li>
                        <li className='block'>
                            <input className='input has-background-info-light is-medium' type='password' name='password' placeholder='Enter Password' value={this.state.user.password} onChange={this.handleChange}/>
                        </li>
                        <li className='block'>
                            <button className='button' onClick={this.doCadastro}>Cadastre</button>
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
import React, { Component } from "react"
import { Link } from "gatsby"
import "../components/layout.css"

//Imagens
import trainer_zero from "../images/trainer_zero.png"
import logo from "../images/logo.png"
import menu_logo from "../images/menu_logo.png"
import arena_10 from "../images/arena_10.png"





export default class BattlePage extends Component {

    render() {
        require('../components/battle.css')
        return(
            <div className='body'>
                <div className="big-header">
                    <a><img className='trainer-photo' src={trainer_zero}/></a>
                    <a><img  src={logo}/></a>
                    <a ><img  src={menu_logo}/></a>
                </div>
                <div className="header">
                    <a  className="header-button">Explorar</a>
                    <Link to="/pokedex">Pokédex</Link>
                    <a className="header-button">Amigos</a>
                    <Link to="/store">Loja</Link>
                    <a className="header-button">Meu Perfil</a>
                    <Link to="/battle">Batalha</Link>
                </div>
                <div className="big-container">
                    <div>
                        <img className="screen-background" src={arena_10}></img>
                        <img className="bot-pokemon" src="https://img.pokemondb.net/sprites/black-white/anim/normal/lugia.gif"></img>
                        <img className="person-pokemon" src="https://img.pokemondb.net/sprites/black-white/anim/back-normal/charizard.gif"></img>
                    </div>
                </div>
            </div>
            
        );
    }
}
    
        
    
        


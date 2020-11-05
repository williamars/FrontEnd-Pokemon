import React, { Component } from "react"
import { Link } from "gatsby"
import "../components/layout.css"
import "../components/battle.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default class BattlePage extends Component {

    render() {
        return(
            <div>
                <div className="big-header">
                    <a><img className="trainer-photo" src="assets/img/trainer_zero.png"></img></a>
                    <a><img className="logo-photo" src="assets/img/logo.png"></img></a>
                    <a ><img className="trainer-photo" src="assets/img/menu_logo.png"></img></a>
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
                        <img className="screen-background" src="../images/arena_10.png"></img>
                        <img className="bot-pokemon" src="https://img.pokemondb.net/sprites/black-white/anim/normal/lugia.gif"></img>
                        <img className="person-pokemon" src="https://img.pokemondb.net/sprites/black-white/anim/back-normal/charizard.gif"></img>
                    </div>
                </div>
            </div>
            
        );
    }
}
    
        
    
        


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
                <div class="big-header">
                    <a><img class="trainer-photo" src="assets/img/trainer_zero.png"></img></a>
                    <a><img class="logo-photo" src="assets/img/logo.png"></img></a>
                    <a ><img class="trainer-photo" src="assets/img/menu_logo.png"></img></a>
                </div>
                <div class="header">
                    <a  class="header-button">Explorar</a>
                    <a class="header-button">Pokédex</a>
                    <a class="header-button">Amigos</a>
                    <a class="header-button">Loja</a>
                    <a class="header-button">Meu Perfil</a>
                    <a l class="Evento">Evento</a>
                </div>
                <div class="big-container">
                    <div>
                        <img class="screen-background" src="assets/img/arena_10.png"></img>
                        <img class="bot-pokemon" src="https://img.pokemondb.net/sprites/black-white/anim/normal/lugia.gif"></img>
                        <img class="person-pokemon" src="https://img.pokemondb.net/sprites/black-white/anim/back-normal/charizard.gif"></img>
                    </div>
                </div>
            </div>
            
        );
    }
}
    
        
    
        


import React, { Component } from "react"
import { Link } from "gatsby"
import "../components/layout.css"
import "../components/store.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default class StorePage extends Component {

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
                    <Link to="/pokedex">Pokedex</Link>
                    <a class="header-button">Amigos</a>
                    <Link to="/store">Loja</Link>
                    <a class="header-button">Meu Perfil</a>
                    <Link to="/battle">Batalha</Link>
                </div>
                <div>
                    <div class="big-container">
                        <div class="store-items">
                            <img class="little-container" src="https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif"></img>
                            <a class="store-text">Bulbasaur</a>
                            <a class="store-text">150 candies</a>
                            <button class="buy-button">Comprar</button>
                        </div>
                        <div class="store-items">
                            <img class="little-container" src="https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif"></img>
                            <a class="store-text">Venusaur</a>
                            <a class="store-text">150 candies</a>
                            <button class="buy-button">Comprar</button>
                        </div>
                        <div class="store-items">
                            <img class="little-container" src="https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif"></img>
                            <a class="store-text">Charmander</a>
                            <a class="store-text">150 candies</a>
                            <button class="buy-button">Comprar</button>
                        </div>
                        <div class="store-items">
                            <img class="little-container" src="https://img.pokemondb.net/sprites/black-white/anim/normal/charmeleon.gif"></img>
                            <a class="store-text">Charmeleon</a>
                            <a class="store-text">150 candies</a>
                            <button class="buy-button">Comprar</button>
                        </div>
                        <div class="store-items">
                            <img class="little-container" src="https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif"></img>
                            <a class="store-text">Charizard</a>
                            <a class="store-text">150 candies</a>
                            <button class="buy-button">Comprar</button>
                        </div>
                        <div class="store-items">
                            <img class="little-container" src="https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif"></img>
                            <a class="store-text">Squirtle</a>
                            <a class="store-text">150 candies</a>
                            <button class="buy-button">Comprar</button>
                        </div>
                        <div class="store-items">
                            <img class="little-container" src="https://img.pokemondb.net/sprites/black-white/anim/normal/wartortle.gif"></img>
                            <a class="store-text">Wartortle</a>
                            <a class="store-text">150 candies</a>
                            <button class="buy-button">Comprar</button>
                        </div>
                        <div class="store-items">
                            <img class="little-container" src="https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif"></img>
                            <a class="store-text">Blastoise</a>
                            <a class="store-text">150 candies</a>
                            <button class="buy-button">Comprar</button>
                        </div>
                    </div>

                </div>
                
            </div>
            
        );
    }
}
    
        
    
        


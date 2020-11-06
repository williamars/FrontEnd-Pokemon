import React, { Component } from "react"
import { Link } from "gatsby"
import "../components/layout.css"

//Imagens
import trainer_zero from "../images/trainer_zero.png"
import logo from "../images/logo.png"
import menu_logo from "../images/menu_logo.png"

export default class StorePage extends Component {

    render() {
        require('../components/store.css')
        return(
            <div>
                <div class="big-header">
                    <a><img class="trainer-photo" src={trainer_zero}></img></a>
                    <a><img class="logo-photo" src={logo}></img></a>
                    <a ><img class="trainer-photo" src={menu_logo}></img></a>
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
    
        
    
        


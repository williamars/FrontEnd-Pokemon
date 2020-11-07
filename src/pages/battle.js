import React, { Component } from "react"
import { Link } from "gatsby"
import "../components/layout.css"

//Imagens
import trainer_zero from "../images/trainer_zero.png"
import logo from "../images/logo.png"
import menu_logo from "../images/menu_logo.png"
import arena_10 from "../images/arena_10.png"
import Header from "../components/header"




export default class BattlePage extends Component {
    
    render() {
        require('../components/battle.css')
        require('../components/header.css')
        return(
            <div className="body">
                <Header/>
                <div>
                    <img className="screen-background" src={arena_10}></img>
                    <img className="bot-pokemon" src="https://img.pokemondb.net/sprites/black-white/anim/normal/lugia.gif"></img>
                    <img className="person-pokemon" src="https://img.pokemondb.net/sprites/black-white/anim/back-normal/charizard.gif"></img>
                </div>
            </div>
            
        );
    }
}
    
        
    
        


import React, { Component, useState, useEffect } from "react"
import { Link } from "gatsby"
import "../components/layout.css"

//Imagens
import trainer_zero from "../images/trainer_zero.png"
import logo from "../images/logo.png"
import menu_logo from "../images/menu_logo.png"
import arena_10 from "../images/arena_3.png"
import Header from "../components/header"
import axios from "axios";
import dialga_poster from "../images/dialga.jpg"
import palkia_poster from "../images/palkia.jpg"
import giratina_poster from "../images/giratina.jpg"
import reshiram_poster from "../images/reshiram.jpg"
import zekrom_poster from "../images/zekrom.jpg"
import kyurem_poster from "../images/kyurem.jpg"

export default class BattlePage extends Component {
    
    render() {
        require('../components/dungeon.css')
        require('../components/header.css')
        return(
            <div class="body">
                <Header/>
                <div class="big-container">
                    <div class="big-card">
                    <img class="img-card" src={dialga_poster}></img>
                    <Link to="/dialga" class="button-img">Dialga</Link>
                    </div>
                    <div class="big-card">
                    <img class="img-card" src={giratina_poster}></img>
                    <Link to="/giratina" class="button-img">Giratina</Link>
                    </div>
                    <div class="big-card">
                    <img class="img-card" src={palkia_poster}></img>
                    <Link to="/palkia" class="button-img">Palkia</Link>
                    </div>

                    <div class="big-card">
                    <img class="img-card" src={zekrom_poster}></img>
                    <Link to="/zekrom" class="button-img">Zekrom</Link>
                    </div>
                    <div class="big-card">
                    <img class="img-card" src={kyurem_poster}></img>
                    <Link to="/kyurem" class="button-img">Kyurem</Link>
                    </div>
                    <div class="big-card">
                    <img class="img-card" src={reshiram_poster}></img>
                    <Link to="/reshram" class="button-img">Reshiram</Link>
                    </div>
                </div>
                
            </div>
            
        );
    }}
import React, { Component, useState, useEffect } from "react"
import { Link } from "gatsby"
import "../components/layout.css"

//Imagens
import trainer_zero from "../images/trainer_zero.png"
import logo from "../images/logo.png"
import menu_logo from "../images/menu_logo.png"
import Header from "../components/header"
import axios from "axios";
import profile_img from "../images/profile_img.png"

export default class ProfilePage extends Component {

    render() {
        require('../components/profile.css')
        require('../components/header.css')

        return (
            <div class="body">
                <Header/>
                <div class="profile-container">
                    <img class="profile-img" src={profile_img}></img>
                    <Link to="/login" class="exit-button" data-testid="exit-button">Sair</Link>
                    <Link to="/deleteAccount" class="exit-button">Deletar conta</Link>
                </div>
            </div>
        );
    }
}


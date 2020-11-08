import React, { Component, useState, useEffect } from "react"
import { Link } from "gatsby"
import "../components/layout.css"

//Imagens
import trainer_zero from "../images/trainer_zero.png"
import logo from "../images/logo.png"
import menu_logo from "../images/menu_logo.png"
import axios from "axios";
import Header from "../components/header"

class Stats {
    constructor(base_attack, base_defense, base_stamina){
        this.base_attack = base_attack;
        this.base_defense = base_defense;
        this.base_stamina = base_stamina;
    }
}

class Pokemon {
    constructor(name, form, stats, type){
        this.name = name;
        this.form = form;
        this.stats = stats;
        this.type = type;
    }
}

function GetNames() {
    var type_list = new Array();
    const [totalReactPackages, setTotalReactPackages] = useState([]);
    useEffect(() => {
        // ===============================REQUEST====TIPOS==================================
        const type = {
            method: 'GET',
            url: 'https://pokemon-go1.p.rapidapi.com/pokemon_types.json',
            headers: {
                'x-rapidapi-key': '0aaae8382cmshc6c10a05f420d5ap1b1414jsn0d7e307e07ff',
                'x-rapidapi-host': 'pokemon-go1.p.rapidapi.com'
            }
        };

        axios.request(type).then(function (type_response) {
            
            const str1 = JSON.stringify(type_response.data);
            const obj1 = JSON.parse(str1)
            for (var i=1; i < 396 ; i+=1) {
                var pokemon_type = obj1[i].type[0].toLowerCase()
                type_list.push(pokemon_type);
            }

        }).catch(function (error) {
            console.error(error);
        });
        // ===============================REQUEST====STATS====================================
        const options = {
            method: 'GET',
            url: 'https://pokemon-go1.p.rapidapi.com/pokemon_stats.json',
            headers: {
              'x-rapidapi-key': '18d3c51f4amsh25ebe51d845cb1cp166adejsnb78afc094182',
              'x-rapidapi-host': 'pokemon-go1.p.rapidapi.com'
            }
          };
          axios.request(options).then(function (response) {
                const str = JSON.stringify(response.data);
                const obj = JSON.parse(str)
                for (var i=1; i < 396 ; i+=1) {
                    var atk;
                    var dfs;
                    var stm;
                    var name;
                    var form;
                    var type;
                    type = type_list[i-1];
                    atk = obj[i].base_attack;
                    dfs = obj[i].base_defense;
                    stm = obj[i].base_stamina;
                    name = obj[i].pokemon_name.toLowerCase();
                    form = obj[i].form.toLowerCase();
                    // Criando um Stats:
                    var stts = new Stats(atk, dfs, stm);
                    // Criando um Pokemon:
                    var pokemon = new Pokemon(name, form, stts, type);
                    setTotalReactPackages(totalReactPackages => [...totalReactPackages,pokemon]);
                }
                totalReactPackages.map(pokemon => {
                })
          }).catch(function (error) {
              console.error(error);
          });
    }, []);
    require('../components/pokedex.css')
    return (
        <div class="big-container">
            {totalReactPackages.map(pokemon => {
                var name = pokemon.name;
                var defense = pokemon.stats.base_defense;
                var attack = pokemon.stats.base_attack;
                var stamina = pokemon.stats.base_stamina;
                var form = pokemon.form;
                var type = pokemon.type;
                var url = "https://img.pokemondb.net/sprites/black-white/anim/normal/"+name.toString()+".gif";
                return(
                    <div>
                        <div class="store-items">
                            <img src={url}></img>
                            <a class="store-text-name">{name}</a>
                            <a class="store-text">Forma: {form}</a> 
                            <a class="store-text">Ataque: {attack}</a> 
                            <a class="store-text">Defesa: {defense}</a> 
                            <a class="store-text">Tipo: {type}</a> 
                            <a class="store-text">Energia: {stamina}</a>
                            
                        </div>
                    </div>
                    )})}
        </div>
        
    );
}
export { GetNames};




export default class PokedexPage extends Component {
    
    render() {
        require('../components/pokedex.css')
        require('../components/header.css')
        return(
            <div className="body">
            <Header siteTitle="Pokedex"/>
               
               <GetNames/>
            </div>
        
        );
    }
}


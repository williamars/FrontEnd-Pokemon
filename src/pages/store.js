import React, { Component, useState, useEffect } from "react"
import { Link } from "gatsby"
import "../components/layout.css"

//Imagens
import trainer_zero from "../images/trainer_zero.png"
import logo from "../images/logo.png"
import menu_logo from "../images/menu_logo.png"
import axios from "axios";
import Header from "../components/header"

var personId = "5fbeb487c1566439bac0c718";

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function refreshPage() {
    window.location.reload(false);
}
    

function gifFix(pokemon_name){
    if (pokemon_name == 'farfetch’d'){
        pokemon_name = 'farfetchd'
    }
    else if (pokemon_name == 'nidoran♀'){
        pokemon_name = 'nidoran-f'
    }
    else if (pokemon_name == 'nidoran♂'){
        pokemon_name = 'nidoran-m'
    }
    else if (pokemon_name == 'mr. mime'){
        pokemon_name = 'mr-mime'
    }
    return pokemon_name
}

class Moves {
    constructor() {
        this.fast_move = "Quick Attack";
        this.charged_move = "SpecialAttack";
    }

    setFastMove(fast_move){
        this.fast_move = fast_move;
    }

    setChargedMove(charged_move){
        this.charged_move = charged_move;
    } 
}

class Stats {
    constructor(base_attack, base_defense, base_stamina){
        this.base_attack = base_attack;
        this.base_defense = base_defense;
        this.base_stamina = base_stamina;
    }
}

class Pokemon {
    constructor(name, form, stats, type, moves){
        this.name = name;
        this.form = form;
        this.stats = stats;
        this.type = type;
        this.moves = moves;
    }
}

function addPokemon(pName, pType, pForm, pAttack, pDefense, pStamina) {
    var body = {pokemon: pName, type: pType, form:pForm, attack: pAttack, defense: pDefense, stamina: pStamina}
    axios.post('http://localhost:3000/users/pokemon/'+personId, body)
    .then(resp=> {
        console.log(resp.status)
        console.log(resp)
    }).catch(erro => console.log(erro))
}


function GetNames() {
    var move_list = new Array();
    var type_list = new Array();
    const [totalReactPackages, setTotalReactPackages] = useState([]);
    useEffect(() => {
        // ===========================REQUEST====MOVIMENTOS================================
        const moves_request = {
            method: 'GET',
            url: 'https://pokemon-go1.p.rapidapi.com/current_pokemon_moves.json',
            headers: {
              'x-rapidapi-key': '18d3c51f4amsh25ebe51d845cb1cp166adejsnb78afc094182',
              'x-rapidapi-host': 'pokemon-go1.p.rapidapi.com'
            }
        };

        axios.request(moves_request).then(function (moves_response) {
            const str2 = JSON.stringify(moves_response.data);
            const obj2 = JSON.parse(str2);
            for (var i=1; i < 394 ; i+=1) {
                var move = new Moves();
                move.setChargedMove(JSON.stringify(obj2[i].fast_moves[0]))
                move.setChargedMove(JSON.stringify(obj2[i].charged_moves[0]))
                move_list.push(move)
            }

        }).catch(function (error) {
            console.error(error);
        });
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
            for (var i=1; i < 394 ; i+=1) {
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
                var randomNumber= getRandomIntInclusive(1, 394);
                for (var k=0; k < 8; k+=1) {
                    var randomNumber= getRandomIntInclusive(1, 394);
                    var atk;
                    var dfs;
                    var stm;
                    var name;
                    var form;
                    var type;
                    var moves;
                    moves = move_list[randomNumber-1];
                    type = type_list[randomNumber-1];
                    atk = obj[randomNumber].base_attack;
                    dfs = obj[randomNumber].base_defense;
                    stm = obj[randomNumber].base_stamina;
                    name = obj[randomNumber].pokemon_name;
                    form = obj[randomNumber].form.toLowerCase();
                    // Criando um Stats:
                    var stts = new Stats(atk, dfs, stm);
                    // Criando um Pokemon:
                    var pokemon = new Pokemon(name, form, stts, type, moves);
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
                // var fast_move = pokemon.moves.fast_move;
                // var charged_move = pokemon.moves.charged_move;
                var url = "https://img.pokemondb.net/sprites/black-white/anim/normal/"+gifFix(name.toString().toLowerCase())+".gif";
                return(
                    <div>
                        <div class="store-items">
                            <img src={url}></img>
                            <a class="store-text-name">{name}</a>
                            <a class="store-text">Forma: {form}</a> 
                            <a class="store-text">Ataque: {attack}</a> 
                            <a class="store-text">Defesa: {defense}</a> 
                            <a class="store-text">Energia: {stamina}</a>
                            <a class="store-text">Tipo: {type}</a>
                            <Link to="/mypokemons" class="button" onClick={ () => addPokemon(name, type, form, attack, defense, stamina)}>Aceitar</Link>
                            
                        </div>
                        
                    </div>
                    )})}
        </div>
    );
}
export { GetNames};
export { addPokemon};
export default class PokedexPage extends Component {
    
    render() {
        require('../components/pokedex.css')
        require('../components/header.css')
        return(
            <div className="body">
            <Header siteTitle="Pokedex"/>
            <div class="store-items">
            <button onClick={refreshPage}>reload!</button>
            </div>
            <GetNames/>
            </div>
        );
    }
}



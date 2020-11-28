import React, { Component, useState, useEffect } from "react"
import { Link } from "gatsby"
import "../components/layout.css"

//Imagens
import trainer_zero from "../images/trainer_zero.png"
import logo from "../images/logo.png"
import menu_logo from "../images/menu_logo.png"
import arena_10 from "../images/arena_2.png"
import Header from "../components/header"
import axios from "axios";
var personId = "5fbeb487c1566439bac0c718";
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var i= getRandomIntInclusive(1, 394);
var b = "Arceus";
var botName = b;
var botPokemonHP = 2000;
var personPokemonName = "";
var personPokemonAttack = 0;
var personPokemonHP = 0;
var personPokemonHPcurr = 0;
var personPokemonNormal = "";
var personPokemonSpecial = "";

function botPokemon(name_pok_bot){
    var botName = name_pok_bot;
    var botURL = "https://img.pokemondb.net/sprites/black-white/anim/normal/"+botName.toLowerCase()+".gif";
    return(
        <div>
            <img className="screen-background" src={arena_10}></img>
            <img className="bot-pokemon" src={botURL}></img>
        </div>
    )
}

class Moves {
    constructor(fast_move, charged_move) {
        this.fast_move = fast_move;
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

function normalAttack() {

  
    if (personPokemonHPcurr <= 0){
        alert("You died already, try again later.")

    botPokemonHP = botPokemonHP - personPokemonAttack
    var printHP = botName+"'s HP: " + botPokemonHP.toString() + "/2000"
    alert(personPokemonName + " used " + "Normal Attack" + "!")
    if (botPokemonHP <= 0) {
        if(window.confirm('You defeated ' + botName + "!"+' Do you wish to Capture this Pokemon?')){

            const result = Math.floor(Math.random()*2)
            if(result == 0){
                addPokemon("arceus", "Legendary", "Event", 600, 600, 500);
                printHP = "Pokemon Captured & Added to your List!"
            }
            else {
                if(window.confirm("You missed! Do you want to try again?")){
                    botPokemonHP = 0
                }
            }
        }
        

    }
    else {
        botPokemonHP = botPokemonHP - personPokemonAttack
        var counterAttack = Math.floor(Math.random() * (personPokemonHP * 0.2)) + 1
        personPokemonHPcurr = personPokemonHPcurr - counterAttack
        var printHP = botName+"'s HP: " + botPokemonHP.toString() + "/2000" + "\n" + personPokemonName+"'s HP: " + personPokemonHPcurr + "/" + personPokemonHP 
        alert(personPokemonName + " used " + "Normal Attack" + "!" + "\nArceus used Counter Attack!")

        if (botPokemonHP <= 0) {
            printHP = "You defeated " + botName + "!";
            addPokemon("Arceus", "Legendary", "Event", 300, 300, 500);
        }
        alert(printHP);
        console.log("hp do mano",personPokemonHP)
    }
    
}}

function specialAttack() {
    if (personPokemonHPcurr <= 0){
        alert("You died already, try again later.")
    }
    else {
        botPokemonHP = botPokemonHP - (personPokemonAttack*1.5);
        var counterAttack = Math.floor(Math.random() * (personPokemonHP * 0.3)) + 1
        personPokemonHPcurr = personPokemonHPcurr - counterAttack
        var printHP = botName+"'s HP: " + botPokemonHP.toString() + "/2000" + "\n" + personPokemonName+"'s HP: " + personPokemonHPcurr + "/" + personPokemonHP 
        alert(personPokemonName + " used " + "Special Attack" + "!" + "\nArceus used Special Counter Attack!")
        if (botPokemonHP <= 0) {
            printHP = "You defeated " + botName + "!";
            addPokemon("Arceus", "Legendary", "Event", 300, 300, 500);
        }
        alert(printHP);
    }
}

function GetStats() {
    var type_list = new Array();
    var move_list = new Array();
    const [totalReactPackages, setTotalReactPackages] = useState([]);
    useEffect(() => {
        const pokemon_battle = {
            method: 'GET',
            url: "http://localhost:3000/users/"+personId
          };
          
          axios.request(pokemon_battle).then(function (battle_response) {
                const str3 = JSON.stringify(battle_response.data);
                const obj3 = JSON.parse(str3)
                var pokemonsList = obj3[0].pokemon_battle;
                var pokemonsArray = new Array();
                pokemonsList.forEach(function(pokemon) {
                        pokemonsArray.push(pokemon)
                        
                });
                var LEN = pokemonsArray.length;
                var namePokemon = pokemonsList[LEN-1].pokemon
                console.log(namePokemon)
                setTotalReactPackages(totalReactPackages => [...totalReactPackages,pokemonsList[LEN-1]]);
          }).catch(function (error) {
              console.error(error);
          });

        // ==============================REQUEST====TIPOS==================================
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
            var pokemon_type = obj1[i].type[0].toLowerCase()
            type_list.push(pokemon_type);

        }).catch(function (error) {
            console.error(error);
        });
        // ===============================REQUEST====MOVES==================================
        const moverequest = {
            method: 'GET',
            url: 'https://pokemon-go1.p.rapidapi.com/current_pokemon_moves.json',
            headers: {
              'x-rapidapi-key': '18d3c51f4amsh25ebe51d845cb1cp166adejsnb78afc094182',
              'x-rapidapi-host': 'pokemon-go1.p.rapidapi.com'
            }
        };

        axios.request(moverequest).then(function (moves_response) {
            const str2 = JSON.stringify(moves_response.data);
            const obj2 = JSON.parse(str2);
            for (var u=1; u<394; u+=1) {
                var fast_move = "Quick Attack"
            if (fast_move === 'undefined') {
                var fast_move = "Quick Attack"
            } else {
                var fast_move = obj2[i].fast_moves[0];
            }
            var charged_move = obj2[i].charged_moves[0];
            var move = new Moves(fast_move, charged_move);
            personPokemonNormal = fast_move;
            personPokemonSpecial = charged_move;
            move_list.push(move)
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
                var atk;
                var dfs;
                var stm;
                var name;
                var form;
                var type;
                var move_;
                type = type_list[i-1];
                move_ = move_list[i-1];
                atk = obj[i].base_attack;
                dfs = obj[i].base_defense;
                personPokemonHP = obj[i].base_stamina * 10;
                personPokemonHPcurr = personPokemonHP
                name = obj[i].pokemon_name.toLowerCase();
                form = obj[i].form.toLowerCase();
                personPokemonAttack = atk;
                personPokemonName = obj[i].pokemon_name;
                // Criando um Stats:
                var stts = new Stats(atk, dfs, stm);
                // Criando um Pokemon:
                var pokemon = new Pokemon(name, form, stts, type, move_);
                // setTotalReactPackages(totalReactPackages => [...totalReactPackages,pokemon]);
                totalReactPackages.map(pokemon => {
                })
          }).catch(function (error) {
              console.error(error);
          });
    }, []);
    require('../components/battle.css')
    return (
        <div class="big-container">
            {totalReactPackages.map(pokemon => {
                var name = pokemon.pokemon;
                var defense = pokemon.defense;
                var attack = pokemon.attack;
                var stamina = pokemon.stamina;
                var form = pokemon.form;
                var type = pokemon.type;
                var url = "https://img.pokemondb.net/sprites/black-white/anim/back-normal/"+name.toString()+".gif"
                personPokemonName = name    
                return(
                    <div class="background">
                        <div>
                            <img class="person-pokemon" src={url}></img>
                        </div>
                        <div className="buttons-box">
                            <button onClick={normalAttack} className="info">Normal Attack</button>
                            <button onClick={specialAttack} className="info-special">Special Attack</button>
                        </div>
                    </div>
                    )
                    
                    })}
        </div>
        
    );
}
export { GetStats};


export { botPokemon};

export default class BattlePage extends Component {
    
    render() {
        require('../components/battle.css')
        require('../components/header.css')
        return(
            <div className="body">
                <Header/>
                {botPokemon(b)}
                <GetStats/>
            </div>
            
        );
    }}

import React, { Component, useState, useEffect } from "react"
import { Link } from "gatsby"
import "../components/layout.css"

//Imagens
import trainer_zero from "../images/trainer_zero.png"
import logo from "../images/logo.png"
import menu_logo from "../images/menu_logo.png"
import axios from "axios";
import Header from "../components/header" 

// var personId = "5fa9a53693fd49001730fbca";
var personId = "5fbeb487c1566439bac0c718";

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

function choosePokemon(pname, ptype, pform, pattack, pdefense, pstamina) {
    var body = {pokemon: pname, type: ptype, form:pform, attack: pattack, defense: pdefense, stamina: pstamina}
    axios.post('https://backend-pokemon.herokuapp.com/users/pokemon-battle/'+personId, body)
    .then(resp=> {
        console.log(resp.status)
        console.log(resp)
    }).catch(erro => console.log(erro))

}



function GetNames(props) {
    const { personId } = props
    var move_list = new Array();
    var type_list = new Array();
    const [totalReactPackages, setTotalReactPackages] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const options = {
            method: 'GET',
            url: "https://backend-pokemon.herokuapp.com/users/"+personId
          };
          
          axios.request(options).then(function (response) {
                const str = JSON.stringify(response.data);
                const obj = JSON.parse(str)
                var pokemonsList = obj[0].pokemons;
                pokemonsList.forEach(function(pokemon) {
                    setTotalReactPackages(totalReactPackages => [...totalReactPackages,pokemon]);
                });
          }).catch(function (error) {
              console.error(error);
          });
    }, []);

    function deletePokemon(pname, ptype, pform, pattack, pdefense, pstamina) {
        var body = {pokemon: pname, type: ptype, form:pform, attack: pattack, defense: pdefense, stamina: pstamina}
        if(window.confirm("Tem certeza que quer soltar " + body.pokemon + "?")){
            setLoading(true)
            axios.put("https://backend-pokemon.herokuapp.com/users/pokemon/"+personId, body)
            .then(resp => {
                console.log("resposta", resp.data)
                
            }).catch(erro => console.log(erro))
            }
            console.log("body", body)
    }

    require('../components/pokedex.css')
    return (
        <div class="big-container">
            {totalReactPackages.map(pokemon => {
                var name = pokemon.pokemon;
                var defense = pokemon.defense;
                var attack = pokemon.attack;
                var stamina = pokemon.stamina;
                var form = pokemon.form;
                var type = pokemon.type;
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
                            <button class="button" onClick={ () => choosePokemon(name, type, form, attack, defense, stamina)}>Escolher</button>  
                            <button data-testid="release-pokemon" class="button" onClick={ () => {deletePokemon(name, type, form, attack, defense, stamina) ; window.location.reload(false)}}>soltar</button>  
                            {loading && <p className="title-menor">Bye!</p>}
                        </div>
                     
                    </div>
                    )})}
        </div>
    );
}
export { GetNames};

export default class PokedexPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
        this.deletePokemon = this.deletePokemon.bind(this)
    }

    deletePokemon() {
        this.setState({loading: true})
        console.log(this.state)
    }
    render() {
        const loading = this.state.loading
        require('../components/pokedex.css')
        require('../components/header.css')
        return(
            <div className="body">
            <Header/>
            <button data-testid="release-pokemon" class="button" onClick={() => {this.deletePokemon()}}>soltar</button>
            {loading && <p className="title-menor">Bye!</p>}
            <GetNames personId={"5fbeb487c1566439bac0c718"}/>
            
            </div>
        );
    }
}



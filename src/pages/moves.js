import React, { Component, useState, useEffect } from "react"
import { Link } from "gatsby"
import "../components/layout.css"
import "./mystyles.scss" 
import '../components/dropdown.css'



//Imagens
import trainer_zero from "../images/trainer_zero.png"
import logo from "../images/logo.png"
import menu_logo from "../images/menu_logo.png"
import axios from "axios";
import Header from "../components/header"

/*class Stats {
    constructor(base_attack, base_defense, base_stamina){
        this.base_attack = base_attack;
        this.base_defense = base_defense;
        this.base_stamina = base_stamina;
    }
}
*/

class Move {
    constructor(name, power, energy_delta, type){
        this.name = name;
        this.energy_delta = energy_delta;
        this.power = power;
        this.type = type;
    }
}
// function filterForm(pokemon){

// }

/*function gifFix(pokemon_name){
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
}*/





    
export default class MovesPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            types: [{type: 'grass', checked: true}, {type: 'fire', checked: true}, {type: 'water', checked: true}, {type: 'bug', checked: true}, {type: 'normal', checked: true}, {type: 'dark', checked: true}, {type: 'poison', checked: true}, {type: 'electric', checked: true}, {type: 'ice', checked: true}, {type: 'ground', checked: true}, {type: 'fairy', checked: true}, {type: 'steel', checked: true}, {type: 'fighting', checked: true}, {type: 'psychic', checked: true}, {type: 'rock', checked: true}, {type: 'ghost', checked: true}, {type: 'dragon', checked: true}, ],
            search: '',
            lista: [{name: 'Test', type:'fire', power:40, energy_delta:1},{name: 'Debug', type:'bug', power:100, energy_delta:5}]
        }
        this.handleChange = this.handleChange.bind(this)
    }

    async componentDidMount() {
        var getMoves = {
            method: 'GET',
            url: 'https://pokemon-go1.p.rapidapi.com/fast_moves.json',
            headers: {
              'x-rapidapi-key': '9b116cd926msh4547d15bdc179dbp187562jsn0a60e822fafd',
              'x-rapidapi-host': 'pokemon-go1.p.rapidapi.com'
            }
          };

        await axios.request(getMoves).then(resp=> {
            //console.log(resp.data)
                if(Math.floor(resp.status/100) === 2) {
                    var movess = resp.data
                    this.setState({lista:resp.data,
                                search:this.state.search,
                                types:this.state.types})
                    return;
                }
        
            }).catch(function (error) {
                console.error(error);
            });
    };


    

    render() {
        require('../components/pokedex.css')
        require('../components/header.css')
        
        


        var moves = this.state.lista
        var renderList = []

        moves.map(move => {
            var type = move.type.toLowerCase()
            var name = move.name
            if (this.state.search=='' || name.toLowerCase().includes(this.state.search)){
                this.state.types.map(type_filter => {
                    if (type === type_filter.type && type_filter.checked) {
                        renderList.push(move)

                    }
                })
            }
            
        })
    
        var Moveslist = renderList.map(move => {
            var name = move.name;
            var power = move.power;
            var energy_delta = move.energy_delta;
            var type = move.type;

    
            return (
                    <div>
                            <div class="store-items">
                                     <a class="store-text-name">{name}</a>
                                     <a class="store-text">Poder: {power}</a> 
                                     <a class="store-text">Tipo: {type}</a> 
                                     <a class="store-text">Gasto de Energia: {energy_delta}</a>
                                    
                            </div>
                    </div>
                    )
            });


    return(
        <div className="body">
            <Header siteTitle="Pokedex"/>
            <div className='filter_bar'>
                <div class="dropdown is-hoverable">
                    <div class="dropdown-trigger">
                        <button class="button filter_item" aria-haspopup="true" aria-controls="dropdown-menu" aria-expanded='false'>
                            <span>Tipo</span>
                            <span className='icon is-small'>
                                <i className="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                
                    <div class="dropdown-menu" id="dropdown-menu" role="menu">
                        {this.state.types.map(obj => {
                            var type = obj.type
                            return(
                                <label className='checkbox'>
                                    <input type='checkbox' name={type} checked={this.state.types.find(obj => obj.type == type).checked} onChange={this.handleChange}/>
                                    {type} 
                                </label>
                            )
                        })}
                    </div>
                </div>
                <div className='control filter_item'>
                    <input type='text' className='input' placeholder='Search' name='search' value={this.state.search} onChange={this.handleChange}/>
                </div>

            </div>
            <div class="big-container">
                {Moveslist}
            </div>
        </div>
    )}

    handleChange(event) {
        var handleState = (state, event) => {
            if (event.target.name === 'search'){
                state.search = event.target.value
            }
            else{
                state.types.find(obj => obj.type == event.target.name).checked = event.target.checked
            }
        return state
        }
        this.setState(handleState(this.state, event))
    }
}
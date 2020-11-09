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
import { types } from "node-sass"

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

function getTypes() {
    var type_list = new Array();
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
            if(!type_list.includes(pokemon_type)) {
                type_list.push(pokemon_type)
            }
        }
        console.log(type_list)
        return type_list

    }).catch(function (error) {
        console.error(error);
    });
    
    console.log(type_list)
    return type_list
}


function GetNames() {
    var type_list = new Array();
    const [totalReactPackages, setTotalReactPackages] = useState([]);
    useEffect(() => {
        // ===============================REQUEST====TIPOS==================================
        // const type = {
        //     method: 'GET',
        //     url: 'https://pokemon-go1.p.rapidapi.com/pokemon_types.json',
        //     headers: {
        //         'x-rapidapi-key': '0aaae8382cmshc6c10a05f420d5ap1b1414jsn0d7e307e07ff',
        //         'x-rapidapi-host': 'pokemon-go1.p.rapidapi.com'
        //     }
        // };

        // axios.request(type).then(function (type_response) {
            
        //     const str1 = JSON.stringify(type_response.data);
        //     const obj1 = JSON.parse(str1)
        //     for (var i=1; i < 396 ; i+=1) {
        //         var pokemon_type = obj1[i].type[0].toLowerCase()
        //         type_list.push(pokemon_type);
        //     }

        // }).catch(function (error) {
        //     console.error(error);
        // });
        type_list = getTypes()
        console.log(type_list)
        
        
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

class GetTypes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            types: []
        }

        let type_list = []
        type_list = getTypes()
        console.log(type_list)
        console.log(types)
        this.setState = {types: type_list};
        console.log(types)
    }
    // useEffect(() => {
    //     type_list=getTypes()
    //     console.log(type_list[1])
    //     for (var i=0; i<18; i+=1){
    //         // setTotalReactPackages(totalReactPackages => [...totalReactPackages, type_list[i]])
    //     }
        
    //     totalReactPackages.map(type => {})
    //     console.log(totalReactPackages)
    // })
    render() {
        return (
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                {/* {this.state.type_list.map(type => {
                    return(
                        <label className='checkbox'>
                            <input type='checkbox'/>
                            {type}
                        </label>
                    )
                })} */}
                {/* <p>tipo: {type_list[0]}</p> */}
                <label className='checkbox'>
                    <input type='checkbox'/>
                    tipo1
                </label>
                <label className='checkbox'>
                    <input type='checkbox'/>
                    tipo2
                </label>
                
            </div>
            
        )
    }
    
}
export { GetTypes}


    
export default class PokedexPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            types: {type: '', checked: false}
        }   
        // this.getTypes = this.getTypes.bind(this)
    }


    

    render() {
    require('../components/pokedex.css')
    require('../components/header.css')
    return(
        <div className="body">
            <Header siteTitle="Pokedex"/>

            <div class="dropdown is-hoverable">
                <div class="dropdown-trigger">
                    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" aria-expanded='false'>
                        <span>Tipo</span>
                        <span className='icon is-small'>
                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
                {/* <div class="dropdown-menu" id="dropdown-menu" role="menu"> */}

                        <GetTypes/>
                    
                {/* </div> */}
            </div>


            <GetNames/>
        </div>
    )}
}




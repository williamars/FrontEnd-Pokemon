import React, { Component, useState, useEffect } from "react"
import { Link } from "gatsby"
import "../components/layout.css"

//Imagens
import trainer_zero from "../images/trainer_zero.png"
import logo from "../images/logo.png"
import menu_logo from "../images/menu_logo.png"
import axios from "axios";
import Header from "../components/header"

function GetNames() {
    const [totalReactPackages, setTotalReactPackages] = useState([]);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        const options = {
            method: 'GET',
            url: 'https://pokemon-go1.p.rapidapi.com/pokemon_types.json',
            headers: {
                'x-rapidapi-key': '0aaae8382cmshc6c10a05f420d5ap1b1414jsn0d7e307e07ff',
                'x-rapidapi-host': 'pokemon-go1.p.rapidapi.com'
            }
            };
        
            axios.request(options).then(function (response) {
                console.log(response.data[2].pokemon_name);
                console.log(response.data[2].pokemon_name);
                //console.log(response.data.lenght());
                const str = JSON.stringify(response.data);
                const obj = JSON.parse(str)
                const lenght = obj.length;
                var count = Object.keys(obj).length;
                //console.log(count);
                // Primeiros 152 Pokemóns -> 1ª Geração!
                for (var i=1; i < 152 ; i+=1) {
                    var pokemon_form;
                    var pokemon_name;
                    var pokemon_type;
                    pokemon_name = obj[i].pokemon_name.toLowerCase()
                    pokemon_form = obj[i].form.toLowerCase()
                    pokemon_type = obj[i].type[0].toLowerCase()
                    var pokemon_list = new Array(pokemon_name, pokemon_form, pokemon_type);
                    if (!(pokemon_name in totalReactPackages)) {
                        setTotalReactPackages(totalReactPackages => [...totalReactPackages,pokemon_list]);
                        
                    }
                   
                    //console.log(totalReactPackages)
                    //setTheArray(oldArray => [...oldArray, (obj[i].name)
                }
                totalReactPackages.map(obj => {
                    //console.log(obj);
                    //return <td>{obj}</td>
                })
                //console.log(totalReactPackages)
                //return
            }).catch(function (error) {
                console.error(error);
            });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    require('../components/pokedex.css')
    return (
        <div class="big-container">
             
                  {totalReactPackages.map(obj => {
                    console.log(obj);
                    var name = obj[0];
                    var form = obj[1];
                    var type = obj[2];
                    var url = "https://img.pokemondb.net/sprites/black-white/anim/normal/"+name.toString()+".gif"
                    return(
                        <div class="store-items">
                            <img src={url}></img>
                            <a class="store-text">{name}</a>
                            <a class="store-text">Forma: {form}</a> 
                            <a class="store-text">Tipo: {type}</a> 
                            <button class="buy-button">evoluir</button>
                        </div>
                        )
                    }
                    )
                    }
                
             
        </div>
        
    );
}

export { GetNames};




export default class PokedexPage extends Component {
    
    render() {
        require('../components/pokedex.css')
        require('../components/header.css')
        return(
            <div>
            <Header siteTitle="Pokedex"/>
    
               <GetNames/>
            </div>
        
        );
    }
}



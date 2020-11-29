import React, { Component, useState, useEffect } from "react"
import { Link } from "gatsby"
import "../components/layout.css"
import "./mystyles.scss"
import "../components/dropdown.css"

//Imagens
import trainer_zero from "../images/trainer_zero.png"
import logo from "../images/logo.png"
import menu_logo from "../images/menu_logo.png"
import axios from "axios"
import Header from "../components/header"

class Stats {
  constructor(base_attack, base_defense, base_stamina) {
    this.base_attack = base_attack
    this.base_defense = base_defense
    this.base_stamina = base_stamina
  }
}

class Pokemon {
  constructor(name, form, stats, type) {
    this.name = name
    this.form = form
    this.stats = stats
    this.type = type
  }
}

// function filterForm(pokemon){

// }

function gifFix(pokemon_name) {
  if (pokemon_name == "farfetch’d") {
    pokemon_name = "farfetchd"
  } else if (pokemon_name == "nidoran♀") {
    pokemon_name = "nidoran-f"
  } else if (pokemon_name == "nidoran♂") {
    pokemon_name = "nidoran-m"
  } else if (pokemon_name == "mr. mime") {
    pokemon_name = "mr-mime"
  }
  return pokemon_name
}

function GetNames(props) {
  var type_list = new Array()
  const [totalReactPackages, setTotalReactPackages] = useState([])
  const type = {
    method: "GET",
    url: "https://pokemon-go1.p.rapidapi.com/pokemon_types.json",
    headers: {
      "x-rapidapi-key": "0aaae8382cmshc6c10a05f420d5ap1b1414jsn0d7e307e07ff",
      "x-rapidapi-host": "pokemon-go1.p.rapidapi.com",
    },
  }
  useEffect(() => {
    // GET TYPES
    axios
      .request(type)
      .then(function (type_response) {
        const str1 = JSON.stringify(type_response.data)
        const obj1 = JSON.parse(str1)
        for (var i = 1; i <= 396; i += 1) {
          var pokemon_type = obj1[i].type[0].toLowerCase()
          type_list.push(pokemon_type)
        }
        console.log(type_list)
        return type_list
      })
      .catch(function (error) {
        console.error(error)
      })
    console.log(type_list)

    // ===============================REQUEST====STATS====================================
    const options = {
      method: "GET",
      url: "https://pokemon-go1.p.rapidapi.com/pokemon_stats.json",
      headers: {
        "x-rapidapi-key": "18d3c51f4amsh25ebe51d845cb1cp166adejsnb78afc094182",
        "x-rapidapi-host": "pokemon-go1.p.rapidapi.com",
      },
    }
    axios
      .request(options)
      .then(function (response) {
        const str = JSON.stringify(response.data)
        const obj = JSON.parse(str)
        for (var i = 1; i < 396; i += 1) {
          var atk
          var dfs
          var stm
          var name
          var form
          var type
          type = type_list[i - 1]
          atk = obj[i].base_attack
          dfs = obj[i].base_defense
          stm = obj[i].base_stamina
          name = obj[i].pokemon_name
          form = obj[i].form.toLowerCase()
          // Criando um Stats:
          var stts = new Stats(atk, dfs, stm)
          // Criando um Pokemon:
          var pokemon = new Pokemon(name, form, stts, type)
          setTotalReactPackages(totalReactPackages => [
            ...totalReactPackages,
            pokemon,
          ])
        }
        totalReactPackages.map(pokemon => {})
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [])
  require("../components/pokedex.css")
  var renderList = []
  return (
    <div class="big-container">
      {/* Checa o filtro pra ver se vai renderizar o pokemon ou não */}
      {totalReactPackages.map(pokemon => {
        var type = pokemon.type
        var name = pokemon.name
        if (props.search == "" || name.toLowerCase().includes(props.search)) {
          props.types_filter.map(type_filter => {
            if (type === type_filter.type && type_filter.checked) {
              renderList.push(pokemon)
            }
          })
        }
      })}
      {renderList.map(pokemon => {
        var name = pokemon.name
        var defense = pokemon.stats.base_defense
        var attack = pokemon.stats.base_attack
        var stamina = pokemon.stats.base_stamina
        var form = pokemon.form
        var type = pokemon.type
        var url =
          "https://img.pokemondb.net/sprites/black-white/anim/normal/" +
          gifFix(name.toString().toLowerCase()) +
          ".gif"

        return (
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
        )
      })}
    </div>
  )
}
export { GetNames }

// const PokedexPage = ({ location }) => {
export default class PokedexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      types: [
        { type: "grass", checked: true },
        { type: "fire", checked: true },
        { type: "water", checked: true },
        { type: "bug", checked: true },
        { type: "normal", checked: true },
        { type: "dark", checked: true },
        { type: "poison", checked: true },
        { type: "electric", checked: true },
        { type: "ice", checked: true },
        { type: "ground", checked: true },
        { type: "fairy", checked: true },
        { type: "steel", checked: true },
        { type: "fighting", checked: true },
        { type: "psychic", checked: true },
        { type: "rock", checked: true },
        { type: "ghost", checked: true },
        { type: "dragon", checked: true },
      ],
      search: "",
      idUser: props.location.state.idUser,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  render() {
    require("../components/pokedex.css")
    require("../components/header.css")
    console.log(this.state.idUser)
    return (
      <div className="body">
        <Header siteTitle="Pokedex" />
        <div className="filter_bar">
          <div class="dropdown is-hoverable">
            <div class="dropdown-trigger">
              <button
                class="button filter_item"
                aria-haspopup="true"
                aria-controls="dropdown-menu"
                aria-expanded="false"
              >
                <span>Tipo</span>
                <span className="icon is-small">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>

            <div class="dropdown-menu" id="dropdown-menu" role="menu">
              {this.state.types.map(obj => {
                var type = obj.type
                return (
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      name={type}
                      checked={
                        this.state.types.find(obj => obj.type == type).checked
                      }
                      onChange={this.handleChange}
                    />
                    {type}
                  </label>
                )
              })}
            </div>
          </div>
          <div className="control filter_item">
            <input
              type="text"
              className="input"
              placeholder="Search"
              name="search"
              value={this.state.search}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <GetNames types_filter={this.state.types} search={this.state.search} />
      </div>
    )
  }

  handleChange(event) {
    var handleState = (state, event) => {
      if (event.target.name === "search") {
        state.search = event.target.value
      } else {
        state.types.find(obj => obj.type == event.target.name).checked =
          event.target.checked
      }
      return state
    }
    this.setState(handleState(this.state, event))
  }
}

import React, { Component, useState, useEffect } from "react"
import { Link } from "gatsby"
import "../components/layout.css"
import axios from "axios"
import Header from "../components/header"
import { check } from "prettier"

var personId = "5fa9a53693fd49001730fbca"

function GetNames() {
  //   var move_list = new Array()
  //   var type_list = new Array()
  const [totalReactPackages, setTotalReactPackages] = useState([])

  const [usuario, setUsuario] = useState({ username: "", password: "" })
  const [newPassword, setNewPassword] = useState({ password: "" })
  //   const [id, setId] = useState("")
  const [antiga, setAntiga] = useState("")
  const [canConfirm, setCanConfirm] = useState(false)

  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://backend-pokemon.herokuapp.com/users/" + personId,
    }

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data[0].password)
        setAntiga(response.data[0].password)
        const str = JSON.stringify(response.data)
        const obj = JSON.parse(str)
        var pokemonsList = obj[0].pokemons
        pokemonsList.forEach(function (pokemon) {
          setTotalReactPackages(totalReactPackages => [
            ...totalReactPackages,
            pokemon,
          ])
        })
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [])

  function handleChangePassword(e) {
    var value = e.target.value
    setUsuario({ user: usuario.username, password: value })
  }

  function handleNewPassword(e) {
    var value = e.target.value
    setNewPassword({ password: value })
  }

  function checkSend() {
    if (usuario.password !== "" || newPassword.password !== "") {
      if (usuario.password === newPassword.password) {
        alert("Senhas equivalentes. Altere")
      } else {
        if (usuario.password === antiga) {
          console.log("senha ok")
          //   axios
          //     .put(
          //       "https://tecweb-back-champions.herokuapp.com/users/" + id,
          //       newPassword
          //     )
          //     .then((resp) => {
          //       if (Math.floor(resp.status / 100) === 2) {
          //         history.push({
          //           pathname: "../fixtures",
          //           state: { id: id },
          //         });
          //       }
          //       return;
          //     })
          //     .catch((erro) => console.log(erro));
        } else {
          alert("senha incorreta!")
        }
      }
    } else {
      alert("Preencha todos os campos")
    }
  }

  require("../components/changePassword.css")

  return (
    <div className="container">
      <div className="senha">
        <h1 className="title-senha">Altere sua senha</h1>
        <label className="title-menor">senha antiga</label>
        <input
          id="senha"
          type="password"
          value={usuario.password}
          name="senha"
          onChange={handleChangePassword}
        />
        <label className="title-menor">senha nova</label>
        <input
          className="last"
          id="newSenha"
          type="password"
          value={newPassword.password}
          name="newSenha"
          onChange={handleNewPassword}
        />
        <button className="button" onClick={checkSend}>
          alterar
        </button>
      </div>
    </div>
  )
}
export { GetNames }

export default class PokedexPage extends Component {
  render() {
    require("../components/pokedex.css")
    require("../components/header.css")
    return (
      <div className="body">
        <Header />
        <GetNames />
      </div>
    )
  }
}

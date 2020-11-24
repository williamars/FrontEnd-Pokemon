import React, { useState, useEffect } from "react"
import "../components/layout.css"
import axios from "axios"
import Header from "../components/header"

var personId = ""

function GetNames(props) {
  const { idUser } = props
  personId = idUser

  const [usuario, setUsuario] = useState({ username: "", password: "" })
  const [canConfirm, setCanConfirm] = useState(false)
  const [deleted, setDeleted] = useState(false)
  const [idPessoaDelete, setidPessoaDelete] = useState("")

  useEffect(() => {
    console.log(personId)
    const options = {
      method: "GET",
      url: "http://backend-pokemon.herokuapp.com/users/" + personId,
    }

    axios
      .request(options)
      .then(function (response) {
        setUsuario({
          username: response.data[0].username,
          password: usuario.password,
        })
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [])

  function handleDeleteAccount(e) {
    var value = e.target.value
    setUsuario({ username: value, password: usuario.password })
  }

  function handleNewPassword(e) {
    var value = e.target.value
    setUsuario({ username: usuario.username, password: value })
  }

  useEffect(() => {
    if (deleted) {
      return <a href="./login.js" />
    }
  }, [deleted])

  useEffect(() => {
    if (idPessoaDelete !== "") {
      axios
        .delete("https://backend-pokemon.herokuapp.com/users/" + idPessoaDelete)
        .then(resp => {
          setCanConfirm(false)
          setDeleted(true)
        })
        .catch(e => console.log(e))
    }
  }, [idPessoaDelete])

  function checkSend() {
    if (usuario.user !== "" || usuario.password !== "") {
      setCanConfirm(true)
      axios
        .post("https://backend-pokemon.herokuapp.com/users/login", usuario)
        .then(resp => {
          if (Math.floor(resp.status / 100) === 2) {
            console.log(resp.data)
            setidPessoaDelete(resp.data)
          }
        })
        .catch(erro => console.log(erro))
    } else {
      alert("Preencha todos os campos")
    }
  }

  require("../components/deleteAccount.css")

  return (
    <div className="container">
      <div className="senha">
        <h1 className="title-senha">Deletar a Conta</h1>
        <label className="title-menor">username</label>
        <input
          id="senha"
          value={usuario.username}
          name="senha"
          onChange={handleDeleteAccount}
        />
        <label className="title-menor">senha</label>
        <input
          className="last"
          id="newSenha"
          type="password"
          value={usuario.password}
          name="newSenha"
          onChange={handleNewPassword}
        />
        {deleted ? (
          <div>
            <p className="title-menor">
              Deletado. Redirecionando à página inicial...
            </p>
            <meta http-equiv="refresh" content="2; URL='/'" />
          </div>
        ) : (
          <button className="button" onClick={checkSend}>
            deletar
          </button>
        )}
        {canConfirm && <p className="title-menor">Carregando...</p>}
      </div>
    </div>
  )
}
export { GetNames }

export default function deleteAccount(props) {
  require("../components/pokedex.css")
  require("../components/header.css")
  return (
    <div className="body">
      <Header />
      <GetNames idUser={props.location.state.idUser} />
    </div>
  )
}

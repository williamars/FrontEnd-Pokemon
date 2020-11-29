import React from "react"
import DeleteAccount from "../deleteAccount"
import Pokemons from "../mypokemons"
import { render, fireEvent, cleanup, screen, within} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import axios from "axios"

it("Checa pra ver se está deletando de fato", () => {
  render(<Pokemons/>)

  const deletePokemon = screen.getByText(/soltar/i)
  expect(deletePokemon).toBeInTheDocument()
  deletePokemon.click()

  const loading = screen.getByText(/Bye/i)
  expect(loading).toBeInTheDocument()
})

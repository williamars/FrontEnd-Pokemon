import React from "react"
import DeleteAccount from "../deleteAccount"
import { render, fireEvent, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

// Reseta o render do component após cada teste
afterEach(cleanup)
it("Quando deletar, deve aparecer o carregamento após o click", () => {
  const { getByTestId, getByText } = render(<DeleteAccount />)

  // Preenche o texto "usuario_teste"
  const usernameInput = getByTestId("username-field")
  expect(usernameInput).toBeInTheDocument()
  fireEvent.change(usernameInput, {
    target: { value: "usuario_teste" },
  })

  // Preenche o texto "senha_teste"
  const passwordInput = getByTestId("password-field")
  expect(passwordInput).toBeInTheDocument()
  fireEvent.change(passwordInput, {
    target: { value: "senha_teste" },
  })

  // Clica no botão de deletar
  const deleteButton = getByText(/deletar/i)
  expect(deleteButton).toBeInTheDocument()
  deleteButton.click()

  // Confere se o carregando funciona
  const loading = getByText(/Carregando/i)
  expect(loading).toBeInTheDocument()
})

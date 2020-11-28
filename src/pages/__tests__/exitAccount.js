import React from "react"
import ProfilePage from "../profile"
import { render, fireEvent, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

// Reseta o render do component após cada teste
afterEach(cleanup)
it("Quando sair, deve ir para a página de login", () => {
  const { getByTestId, getByText } = render(<ProfilePage/>)

  // Clica no botão de sair
  const deleteButton = getByText(/Sair/i)
  expect(deleteButton).toBeInTheDocument()
  deleteButton.click()

  // Confere se chegou na página de login
  const loginField = getByTestId("loginField")
  expect(loginField).toBeInTheDocument()
})
import React from "react"
import GetStats from "../arceus"
import { render, fireEvent, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

// Reseta o render do component após cada teste
afterEach(cleanup)
it("Quando atacar, deve aparecer o carregamento após o click", () => {
  const { getByTestId } = render(<GetStats />)

    // Clica no botão de deletar
  const normalAttack = getByTestId("normal")
  expect(normalAttack).toBeInTheDocument()
  normalAttack.click()

  // Clica no botão de deletar
  const deleteButton = getByTestId("especial")
  expect(deleteButton).toBeInTheDocument()
  deleteButton.click()

})

import React from "react"
import PokedexPage from "../store"
import { render, fireEvent, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

// Reseta o render do component após cada teste
afterEach(cleanup)
it("Quando deletar, deve aparecer o carregamento após o click", () => {
  const { getByTestId, getByText } = render(<PokedexPage />)

  // Clica no botão de dar refresh
  const refreshPage = getByText(/reload!/i)
  expect(refreshPage).toBeInTheDocument()
  refreshPage.click()
})

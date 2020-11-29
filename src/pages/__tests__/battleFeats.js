import React from "react"
import Battle from "../battle"
import { render, fireEvent, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

// Reseta o render do component após cada teste
afterEach(cleanup)

describe("Battle", () => {
    const props = {
        state: {
            test: true
        }
    }

    it("Verifica se o pokemon foge de fato da batalha", () => {
        const { getByTestId, getByText } = render(<Battle />)
      
        const fleeButton = getByTestId("run")
        expect(fleeButton).toBeInTheDocument()
        fleeButton.click()
      
        const fled = getByText(/Fled/i)
        expect(fled).toBeInTheDocument()
      })
      
    it("Checa pra ver se a morte do pokemon com ataque normal funciona", () => {
        const { getByTestId, getByText } = render(<Battle {...props}/>)
    
        const attackButton = getByTestId("normal-attack")
        expect(attackButton).toBeInTheDocument()
        attackButton.click()
    
        const fled = getByText(/Dead/i)
        expect(fled).toBeInTheDocument()
    })

    it("Checa pra ver se a morte do pokemon com ataque especial funciona", () => {
    const { getByTestId, getByText } = render(<Battle {...props}/>)
    
        const attackButton = getByTestId("special-attack")
        expect(attackButton).toBeInTheDocument()
        attackButton.click()
    
        const fled = getByText(/Dead/i)
        expect(fled).toBeInTheDocument()
    })
    
    it("Checa pra ver se as potions estão funcionando", () => {
    const { getByTestId, getByText } = render(<Battle {...props}/>)

    const healButton = getByTestId("potion")
    expect(healButton).toBeInTheDocument()
    healButton.click()

    const healed = getByTestId("healed")
    expect(healed).toBeInTheDocument()
    })
})

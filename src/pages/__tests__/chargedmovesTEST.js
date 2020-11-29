import React from "react"
import ChargedMovesPage from "../chargedmoves"
import { mount, configure } from "enzyme"
import toJson from "enzyme-to-json"
import Adapter from "enzyme-adapter-react-16"

configure({ adapter: new Adapter() })
it("Mostra a lista de golpes", () => {
  const props = {
    location: {
      state: {
        types: [{type: 'grass', checked: true}, {type: 'fire', checked: true}, {type: 'water', checked: true}, {type: 'bug', checked: true}, {type: 'normal', checked: true}, {type: 'dark', checked: true}, {type: 'poison', checked: true}, {type: 'electric', checked: true}, {type: 'ice', checked: true}, {type: 'ground', checked: true}, {type: 'fairy', checked: true}, {type: 'steel', checked: true}, {type: 'fighting', checked: true}, {type: 'psychic', checked: true}, {type: 'rock', checked: true}, {type: 'ghost', checked: true}, {type: 'dragon', checked: true}, ],
        search: '',
        lista: [{name: 'Test', type:'fire', power:40, energy_delta:1},{name: 'Debug', type:'bug', power:100, energy_delta:5}]
      },
    },
  }
  const app = mount(<ChargedMovesPage {...props} />)
  expect(toJson(app)).toMatchSnapshot()
})
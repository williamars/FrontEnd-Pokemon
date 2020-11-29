import React from "react"
import MovesPage from "../chargedmoves"
import { mount, configure } from "enzyme"
import toJson from "enzyme-to-json"
import Adapter from "enzyme-adapter-react-16"


afterEach(cleanup)

it("should check the list", () => {
    const props = {
        location: {
          state: {
            types: [{type: 'grass', checked: true}, {type: 'fire', checked: true}, {type: 'water', checked: true}, {type: 'bug', checked: true}, {type: 'normal', checked: true}, {type: 'dark', checked: true}, {type: 'poison', checked: true}, {type: 'electric', checked: true}, {type: 'ice', checked: true}, {type: 'ground', checked: true}, {type: 'fairy', checked: true}, {type: 'steel', checked: true}, {type: 'fighting', checked: true}, {type: 'psychic', checked: true}, {type: 'rock', checked: true}, {type: 'ghost', checked: true}, {type: 'dragon', checked: true}, ],
            search: '',
            lista: [{name: 'Test', type:'Normal', power:60, energy_delta:-33,critical_chance: 0.05},{name: 'Debug', type:'Dark', power:150, energy_delta:-50,critical_chance: 0.15}]
          },
        },
      }
    const app = mount(<MovesPage {...props} />)
    expect(toJson(app)).toMatchSnapshot() })
import React from "react"
import DeleteAccount from "../deleteAccount"
import { mount, configure } from "enzyme"
import toJson from "enzyme-to-json"
import Adapter from "enzyme-adapter-react-16"

configure({ adapter: new Adapter() })
it("Tem que renderizar o nome do usuário que está logado", () => {
  const props = {
    location: {
      state: {
        idUser: "5fbeafdd4419ee00170138fd",
      },
    },
  }
  const app = mount(<DeleteAccount {...props} />)
  expect(toJson(app)).toMatchSnapshot()
})

import React from "react"
import renderer from "react-test-renderer"

import Header from "../header"

describe("Header", () => {
  it("Header Renderizando Corretamente", () => {
    const tree = renderer
      .create(<Header siteTitle="Default Starter" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

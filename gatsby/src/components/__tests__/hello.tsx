import React from "react"
import renderer from "react-test-renderer"

import Hello from "../hello"

describe("Hello", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Hello />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

import React from 'react'
import { shallow } from 'enzyme'
import Header from './../components/header.component'

describe('Header Component', () => {
  it('expect to render Header', () => {
    expect(shallow(<Header name="Seun" />)).toMatchSnapshot()
  })
})

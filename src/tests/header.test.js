import React from 'react'
import { shallow } from 'enzyme'
import Header from './../components/header.component'

it('expect to render Header', () => {
  expect(shallow(<Header />).length).toEqual(1)
})

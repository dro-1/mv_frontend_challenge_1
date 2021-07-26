import React from 'react'
import { shallow } from 'enzyme'
import { LoginPage } from './../pages/login.page'

describe('Login Page', () => {
  it('correctly renders Login Page', () => {
    expect(shallow(<LoginPage />)).toMatchSnapshot()
  })

  it('calls setUser with the right parameters on login button click with the right login details', async () => {
    const mockSetUser = jest.fn()

    const loginWrapper = shallow(<LoginPage setUser={mockSetUser} />)

    loginWrapper
      .find('#password')
      .simulate('change', { target: { value: 'password' } })
    loginWrapper.find('#name').simulate('change', { target: { value: 'seun' } })
    loginWrapper.find('#login').simulate('click', {
      preventDefault: () => null,
    })

    expect(mockSetUser).toBeCalledWith({
      name: 'seun',
      balance: 0,
    })
  })

  it('does NOT call setUser if login button is clicked with wrong login details', async () => {
    const mockSetUser = jest.fn()

    const loginWrapper = shallow(<LoginPage setUser={mockSetUser} />)

    loginWrapper
      .find('#password')
      .simulate('change', { target: { value: 'pass' } })
    loginWrapper.find('#name').simulate('change', { target: { value: 'seun' } })
    loginWrapper.find('#login').simulate('click', {
      preventDefault: () => null,
    })

    expect(mockSetUser).toBeCalledTimes(0)
  })
})

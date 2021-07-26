import React from 'react'
import { shallow } from 'enzyme'
import { HomePage } from './../pages/home.page'

describe('Home Page', () => {
  it('correctly renders Home Page', () => {
    expect(shallow(<HomePage balance={5000} />)).toMatchSnapshot()
  })

  it('does NOT call the deposit function if amount is less than 0', () => {
    const deposit = jest.fn()

    const wrapper = shallow(<HomePage deposit={deposit} />)

    wrapper.find('#amount').simulate('change', { target: { value: '-2545' } })

    wrapper.find('#depositBtn').simulate('click', {
      preventDefault: () => null,
    })

    expect(deposit).toBeCalledTimes(0)
    expect(wrapper.containsMatchingElement(<p> Invalid Amount </p>)).toEqual(
      true,
    )
  })

  it('DOES call the deposit function with the right amount', () => {
    const deposit = jest.fn()

    const wrapper = shallow(<HomePage deposit={deposit} />)

    wrapper.find('#amount').simulate('change', { target: { value: '2545' } })

    wrapper.find('#depositBtn').simulate('click', {
      preventDefault: () => null,
    })

    expect(deposit).toBeCalledWith(2545)
    expect(
      wrapper.containsMatchingElement(<p> You have deposited $2545</p>),
    ).toEqual(true)
  })

  it('does NOT call the withdraw function if amount is less than 0', () => {
    const withdraw = jest.fn()

    const wrapper = shallow(<HomePage withdraw={withdraw} />)

    wrapper.find('#amount').simulate('change', { target: { value: '-2545' } })

    wrapper.find('#withdrawBtn').simulate('click', {
      preventDefault: () => null,
    })

    expect(withdraw).toBeCalledTimes(0)
    expect(wrapper.containsMatchingElement(<p> Invalid Amount </p>)).toEqual(
      true,
    )
  })

  it('does NOT call the withdraw function if withdrawal leads to a negative balance', () => {
    const withdraw = jest.fn()

    const wrapper = shallow(<HomePage balance={5000} withdraw={withdraw} />)

    wrapper.find('#amount').simulate('change', { target: { value: '7534' } })

    wrapper.find('#withdrawBtn').simulate('click', {
      preventDefault: () => null,
    })

    expect(withdraw).toBeCalledTimes(0)
    expect(
      wrapper.containsMatchingElement(<p> Insufficient balance </p>),
    ).toEqual(true)
  })

  it('DOES call the withdraw function if the checks passed', () => {
    const withdraw = jest.fn()

    const wrapper = shallow(<HomePage balance={5000} withdraw={withdraw} />)

    wrapper.find('#amount').simulate('change', { target: { value: '2500' } })

    wrapper.find('#withdrawBtn').simulate('click', {
      preventDefault: () => null,
    })

    expect(withdraw).toBeCalledWith(2500)
    expect(
      wrapper.containsMatchingElement(<p> You have withdrawn $2500</p>),
    ).toEqual(true)
  })
})

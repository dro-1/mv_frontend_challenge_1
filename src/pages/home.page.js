import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { setUser, withdraw, deposit } from './../redux/user/user.actions'

import Header from '../components/header.component'

const Container = styled.div`
  background-color: #1c1a23;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
const MainSection = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px;
  width: 100%;
  max-width: 450px;
  margin-left: auto;
  margin-right: auto;
  p {
    color: #fff;
    text-align: center;
    font-size: 2rem;
    span {
      display: block;
      &:first-child {
        font-size: 2rem;
        margin-bottom: 2rem;
      }
      &:last-child {
        font-size: 4rem;
        font-weight: bold;
        margin-bottom: 2rem;
      }
    }
  }
  input {
    width: 100%;
    padding: 2rem;
    background-color: #1e1c24;
    border: solid 1px #ccc;
    border-radius: 2rem;
    color: #fff;
    margin-bottom: 2rem;
    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }

    &:focus {
      outline: none;
      border: solid 1px rgba(144, 256, 143, 0.5);
    }
  }
  .buttons {
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
    button {
      padding: 1.5rem;
      color: #1e1c24;
      border: none;
      text-align: center;
      border-radius: 2rem;
      background-color: #fff;
      font-weight: bold;
      font-size: 1.5rem;
      &:focus {
        outline: none;
        border: solid 1px rgba(144, 256, 143, 0.5);
      }
    }
  }
`

export const HomePage = ({ logOut, name, balance, deposit, withdraw }) => {
  const [amount, setAmount] = useState('0')
  const [transactionMade, setTransactionMode] = useState('')
  const [error, setError] = useState('')

  const handleWithdraw = (e) => {
    e.preventDefault()
    if (amount < 0) {
      setTimeout(() => {
        setError('')
      }, 2000)
      return setError('Invalid Amount')
    }
    if (balance - amount < 0) {
      setTimeout(() => {
        setError('')
      }, 2000)
      return setError('Insufficient balance')
    }
    withdraw(parseInt(amount))
    setTransactionMode('withdraw')
    setTimeout(() => {
      setTransactionMode('')
    }, 2000)
  }

  const handleDeposit = (e) => {
    e.preventDefault()
    if (amount < 0) {
      setTimeout(() => {
        setError('')
      }, 2000)
      return setError('Invalid Amount')
    }
    deposit(parseInt(amount))
    setTransactionMode('deposit')
    setTimeout(() => {
      setTransactionMode('')
    }, 2000)
  }

  return (
    <Container>
      <Header name={name} logOut={logOut} />
      <MainSection>
        <p>
          <span>Your account balance is: </span>
          <span>${balance}</span>
        </p>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={({ target: { value } }) => setAmount(value)}
          placeholder="Amount"
        />
        <div className="buttons">
          <button id="withdrawBtn" onClick={handleWithdraw}>
            Withdraw
          </button>
          <button id="depositBtn" onClick={handleDeposit}>
            Deposit
          </button>
        </div>

        {error && <p> {error} </p>}
        {transactionMade === 'deposit' && !error && (
          <p> You have deposited ${parseInt(amount)}</p>
        )}

        {transactionMade === 'withdraw' && !error && (
          <p> You have withdrawn ${parseInt(amount)}</p>
        )}
      </MainSection>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  name: state.user.name,
  balance: state.user.balance,
})

const mapDispatchToProps = (dispatch) => ({
  logOut: () =>
    dispatch(
      setUser({
        name: '',
        balance: NaN,
      }),
    ),
  withdraw: (amount) => dispatch(withdraw(amount)),
  deposit: (amount) => dispatch(deposit(amount)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

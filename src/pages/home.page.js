import React from 'react'
import styled from 'styled-components'
import { Header } from '../components/header.component'

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
  border-top: 1px solid #ccc;
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
  .buttons {
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
    button {
      padding: 1.5rem;
      color: #1e1c24;
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

export const HomePage = () => {
  return (
    <Container>
      <Header />
      <MainSection>
        <p>
          <span>Your account balance is: </span>
          <span>${20000}</span>
        </p>
        <div className="buttons">
          <button>Withdraw</button>
          <button>Deposit</button>
        </div>
        <p> You have withdrawn ${500}</p>
      </MainSection>
    </Container>
  )
}

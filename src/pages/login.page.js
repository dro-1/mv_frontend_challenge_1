import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #1c1a23;
  form {
    padding: 20px;
    margin: 0 auto;
    header {
      color: #fff;
      margin-bottom: 4rem;
      h1 {
        font-size: 3.5rem;
        margin-bottom: 1rem;
      }
      h2 {
        font-size: 2rem;
        font-weight: normal;
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
      &:nth-child(3) {
        margin-bottom: 4rem;
      }
      &:focus {
        outline: none;
        border: solid 1px rgba(144, 256, 143, 0.5);
      }
    }
    button {
      width: 100%;
      padding: 2rem;
      color: #1e1c24;
      border-radius: 2rem;
      background-color: #fff;
      font-weight: bold;
      &:focus {
        outline: none;
        border: solid 1px rgba(144, 256, 143, 0.5);
      }
    }
  }
`

export const LoginPage = () => {
  return (
    <Container>
      <form>
        <header>
          <h1>Let's sign you in.</h1>
          <h2>Welcome back. You've been missed.</h2>
        </header>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Sign In</button>
      </form>
    </Container>
  )
}

import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { setUser } from './../redux/user/user.actions'

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

      &::placeholder {
        color: rgba(255, 255, 255, 0.4);
      }

      &:focus {
        outline: none;
        border: solid 1px rgba(144, 256, 143, 0.5);
      }
    }
    i {
      color: white;
      display: inline-block;
      margin-left: 1rem;
      &:nth-child(3) {
        margin-bottom: 2rem;
      }
      &:nth-child(5) {
        margin-bottom: 4rem;
      }
    }
    button {
      width: 100%;
      padding: 2rem;
      color: #1e1c24;
      border: none;
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

const LoginPage = ({ setUser }) => {
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const history = useHistory()

  const handleClick = (e) => {
    e.preventDefault()
    if (password === 'password' && name.length > 0) {
      setUser({
        name,
        balance: 0,
      })
    }
  }

  return (
    <Container>
      <form>
        <header>
          <h1>Let's sign you in.</h1>
          <h2>Welcome back. You've been missed.</h2>
        </header>
        <input
          type="text"
          value={name}
          placeholder="Username"
          onChange={({ target: { value } }) => setName(value)}
        />
        <i>Username must not be empty</i>
        <input
          type="password"
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
          placeholder="Password"
        />
        <i>Password is password</i>
        <button onClick={handleClick}>Sign In</button>
      </form>
    </Container>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
})

export default connect(null, mapDispatchToProps)(LoginPage)

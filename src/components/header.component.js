import React from 'react'
import styled from 'styled-components'

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  color: #fff;
  img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
  }
  header {
    h1 {
      font-size: 2rem;
    }
  }
  button {
    padding: 1rem;
    background-color: #fff;
    color: #1c1a23;
    border: none;
    border-radius: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
  @media screen and (min-width: 1000px) {
    padding-left: 8rem;
    padding-right: 8rem;
  }
`

const Header = ({ name, logOut }) => {
  return (
    <Container>
      <header>
        <h1>Hi {name}</h1>
      </header>
      <img
        src="https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295430_960_720.png"
        alt="profile"
      />
      <button onClick={logOut}> Log Out</button>
    </Container>
  )
}

export default Header

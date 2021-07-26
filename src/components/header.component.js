import React from 'react'
import styled from 'styled-components'

import userImage from './../assets/profile-image.jpeg'

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

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
    border-radius: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
`

export const Header = () => {
  return (
    <Container>
      <header>
        <h1>Hi Seun</h1>
      </header>
      <img src={userImage} />
      <button> Log Out</button>
    </Container>
  )
}

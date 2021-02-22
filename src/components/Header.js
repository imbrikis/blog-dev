import React from 'react'
import { Jumbotron } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Jumbotron className='text-center'>
        <h1>An interesting title of some sort</h1>
        <p>
          My triumphs, failures, and subsequent learnings in software
          development, all in blog form
        </p>
      </Jumbotron>
    </header>
  )
}

export default Header

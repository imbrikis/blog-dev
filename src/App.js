import React from 'react'
import { Container } from 'react-bootstrap'

import NavBar from './components/NavBar'
import Main from './components/Main'
import Footer from './components/Footer'

const App = () => {
  return (
    <Container fluid='md'>
      <NavBar />
      <Main />
      <Footer />
    </Container>
  )
}

export default App

import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container className='m-0'>
        <Navbar.Brand href="#home">Sistema Acadêmico</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Página 1</Nav.Link>
          <Nav.Link href="#features">Página 2</Nav.Link>
          <Nav.Link href="#pricing">Array</Nav.Link>
          <Nav.Link href="#pricing">Carros</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  )
}

export default Cabecalho
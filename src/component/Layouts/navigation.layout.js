import {Navbar, Container, Nav} from "react-bootstrap"

const Navigation = () => {
    return (
        <Navbar bg="light" variant="" expand="lg">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Albums">Albums</Nav.Link>
              <Nav.Link href="/posts">Post</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Navigation
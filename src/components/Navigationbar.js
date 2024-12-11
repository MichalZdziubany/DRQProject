import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navigationbar = () => {
  return (
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">My Book Library</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home Page</Nav.Link>
              <Nav.Link href="/addBook">Add A Book</Nav.Link>
              <Nav.Link href="/getBooks">See Books</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
  );
};

export default Navigationbar;
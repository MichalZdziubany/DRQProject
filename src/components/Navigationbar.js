import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './books.css';


const Navigationbar = () => {
  return (
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Nav className="mx-auto">
              <Navbar.Brand href="/">BookShelf</Navbar.Brand>
              <Nav.Link href="/addBook">Add A Book</Nav.Link>
              <Nav.Link href="/getBooks">See Books</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
  );
};

export default Navigationbar;
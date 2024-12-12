import './footer.css';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-3">
      <Container className="text-center">
        <p className="mb-0">&copy; {new Date().getFullYear()} Bookshelf. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;

import { Row, Col } from 'react-bootstrap';
import './main.css';


const Main = ()=>{
    return(
    <div className="main-page-container">
        <div className="main-page text-center">
          <h1 className="display-4">Welcome to Bookshelf</h1>
          <p className="lead">Your personal library for managing and exploring your book collection.</p>
          <Row className="mt-4">
          <Col md={6}>
            <div className="info-box">
              <h2>Manage Your Collection</h2>
              <p>Keep track of all the books you own, have read, or want to read. Easily add new books to your collection and organize them effortlessly.</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="info-box">
              <h2>Explore and Discover</h2>
              <p>Browse through your collection to revisit your favorites or discover books you may have forgotten about. Enjoy the journey through your bookshelf!</p>
            </div>
          </Col>
        </Row>  
        </div>
    </div>
    );
}

export default Main;
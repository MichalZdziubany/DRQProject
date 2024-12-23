import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import './books.css';

//deletion handling and layout for books
const BookItem = (props)=> {
  useEffect(() => {
    console.log("Movie Item:", props.mybook);
  }, [props.mybook]);

  const handleDelete = (e)=>{
    e.preventDefault();

    axios.delete('http://localhost:4000/api/book/'+props.mybook._id)
    .then((res)=>{
      props.Reload();
    })
    .catch((error)=>{
      console.log(error);
    });

  }

  return (
    <div>
      <Card className="book-card">
        <Card.Header>{props.mybook.title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.mybook.cover} alt={props.mybook.title} />
            <p>{props.mybook.genre}</p>
            <footer>{props.mybook.author}</footer>
          </blockquote>
        </Card.Body>
        <div  className="d-flex justify-content-between">
          {/* edit button to reroute chosen book to edit page */}
          <Link to={"/edit/" + props.mybook._id} className="btn btn-primary">Edit Book</Link>
          {/* delete button to invoke handle delete method */}
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </div>
      </Card>
    </div>
  );
}

export default BookItem;
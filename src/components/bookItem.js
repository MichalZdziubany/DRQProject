import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

const BookItem = (props)=> {
  useEffect(() => {
    console.log("Movie Item:", props.mybook);
  }, [props.mybook]); // Only run this effect when the mybook prop changes

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
      <Card>
        <Card.Header>{props.mybook.title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.mybook.cover} alt={props.mybook.title} />
            <p>{props.mybook.genre}</p>
            <footer>{props.mybook.author}</footer>
          </blockquote>
        </Card.Body>
        <Link to={"/edit/" + props.mybook._id} className="btn btn-primary">Edit Book</Link>
        {/* delete button to invoke handle delete method */}
        <Button variant="danger" onClick={handleDelete}>Delete</Button>
      </Card>
    </div>
  );
}

export default BookItem;
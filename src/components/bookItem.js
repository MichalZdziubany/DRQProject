import { useEffect } from "react";
import Card from 'react-bootstrap/Card';


const BookItem = (props)=> {
  useEffect(() => {
    console.log("Movie Item:", props.mybook);
  }, [props.mybook]); // Only run this effect when the mybook prop changes



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
      </Card>
    </div>
  );
}

export default BookItem;
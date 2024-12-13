import Books from "./books";
import { useEffect, useState } from "react";
import axios from "axios";
import './books.css';

//gets data from the database 
const GetBooks = () => {

  const [books, setBooks] = useState([]);

  const ReloadBooks = ()=>{
    axios.get('http://localhost:4000/api/books')
      .then((response) => {
        console.log(response.data);
        setBooks(response.data.books);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    ReloadBooks();
    
  },[]);

  return (
      
    <div>
      <h2>View your books Here</h2>
      <div id="bookContainer">
        <Books myBooks={books} ReloadBooks={ReloadBooks} />
      </div>
    </div>
  );
}

export default GetBooks;
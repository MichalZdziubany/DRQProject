import Books from "./books";
import { useEffect, useState } from "react";
import axios from "axios";

const getBooks = () => {

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
      <h3>Hello from read component!</h3>
      <Books myBooks={books} ReloadBooks={ReloadBooks} />
    </div>
  );
}

export default getBooks;
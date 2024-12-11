//add all imports
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Edit(props) {
//useParams in this case gets the id of the book we want to edit
//useNavigated redirects the user back to the read component
//add state variables to your functional components
  let { id } = useParams();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [genre, setGenre] = useState("");
  const navigate = useNavigate();

//edits the book to what the user inputs
useEffect(() => {
    axios.get('http://localhost:4000/api/book/' + id)
        .then((response) => {
            setTitle(response.data.title);
            setAuthor(response.data.author);
            setCover(response.data.cover);
            setGenre(response.data.genre);
        })
        .catch((error) => {
            console.log(error);
        });
}, [id]);

//posts the edited book to the database
const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = { id, title, author, cover, genre };
    axios.put('http://localhost:4000/api/book/' + id, newBook)
        .then((res) => {
            console.log(res.data);
            navigate('/read');
        });
}

{/*form to edit books and send to database*/}
return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Edit Book Title: </label>
                <input type="text" 
                className="form-control" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Edit Author: </label>
                <input type="text" 
                className="form-control" 
                value={author} 
                onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Edit Cover URL: </label>
                <input type="text" 
                className="form-control" 
                value={cover} 
                onChange={(e) => setCover(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Edit Genre: </label>
                <input type="text" 
                className="form-control" 
                value={genre} 
                onChange={(e) => setGenre(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="submit" value="Edit Book" className="btn btn-primary" />
            </div>
        </form>
    </div>
);
}
import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './addBook.css';

//on form submit the values inputted are posted to the database and user is rerouted
const AddBook = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [cover, setCover] = useState('');
    const [genre, setGenre] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = {title,author,cover,genre};
        console.log(book);

        axios.post('http://localhost:4000/api/books',book)
        .then((res)=>{console.log(res.data)
            navigate('/getBooks');
        })
        .catch();
    }

    return (
        <div className="add-book-container"> 
            <h3 className="add-book-heading">Fill in information to add a Book!</h3>
            <div className="add-book-form-wrapper">
            <form onSubmit={handleSubmit} className="add-book-form">
                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Book Author: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Book Cover: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Book Genre: </label>
                    <input type="text"
                        className="form-control"
                        value={genre}
                        onChange={(e) => { setGenre(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit" value="Add Book" className="submit-btn"></input>
                </div>
            </form>
            </div>
        </div>
    );
}
export default AddBook;
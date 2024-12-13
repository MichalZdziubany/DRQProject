import BookItem from "./bookItem";
import './books.css';

//iterate through the collection and pass to getBooks
const Books = (props)=>{
    return props.myBooks.map(
        (book)=>{
            return <BookItem mybook={book} key={book._id} Reload={props.ReloadBooks} />
        }
    );
}

export default Books;
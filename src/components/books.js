import BookItem from "./bookItem";

const Books = (props)=>{
    return props.myBooks.map(
        (book)=>{
            return <BookItem mybook={book} key={book._id} Reload={props.ReloadBooks} />
        }
    );
}

export default Books;
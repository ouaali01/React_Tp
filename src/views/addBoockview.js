
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { bookService } from '../service/BookService';
import { useHistory } from "react-router-dom";
import Bookform from "../compounents/formbook";


const AddBookView = () => {

    const [book, setBook] = useState({});
    let history = useHistory();



    const handleChangeForm = (event) => {
        let newBook = book ;
        newBook[event.target.name] = event.target.value;
        setBook(newBook);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(JSON.stringify(book));
        book.id = Date.now();
        bookService.save(book)
            .then(respons => {
                history.push('/');
            })
            .catch(error => {console.error(error)})
    }

    return (
       <Bookform handleSubmit={handleSubmit} book={book} handleChangeForm={handleChangeForm}></Bookform>
    )
}

export default AddBookView;

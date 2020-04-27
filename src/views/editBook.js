import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { bookService } from '../service/BookService';
import { useHistory } from "react-router-dom";
import { useParams} from "react-router";
import Bookform from "../compounents/formbook";



const EditBook = () => {

    const [book, setBook] = useState({});
    let history = useHistory();
    let { id } = useParams();

    bookService.findBooksById({id})
        .then(function (response) {
            setBook(response.data)
        });


    const handleChangeForm = (event) => {
        let newBook = book ;
        newBook[event.target.name] = event.target.value;
        setBook(newBook);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(JSON.stringify(book));
        bookService.update(book)
            .then(respons => {
                history.push('/');
            })
            .catch(error => {console.error(error)})
    }

    return (
       <Bookform handleChangeForm={handleChangeForm} book={book} handleSubmit={handleSubmit}></Bookform>
    )
}

export default EditBook;

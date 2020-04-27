import React, { useState, useEffect } from 'react';
import {bookService} from "../service/BookService";
import {Card} from "react-bootstrap";
import { useParams} from "react-router";



const DetailsViewBook = () => {
    const [book, setbook] = useState('');
    let { id } = useParams();

        bookService.findBooksById({id})
            .then(function (response) {
                setbook(response.data)
            });

      return (
          <Card>
            <Card.Header>{book.title}</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {book.summary}
                </p>
              </blockquote>
            </Card.Body>
              <button variant="primary">List books</button>
          </Card>

      );



    };



export default DetailsViewBook;

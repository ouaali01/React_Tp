import React from 'react';
import { Card } from 'react-bootstrap';
import {Link} from "react-router-dom";


const Book = ({book}) => {
    return (
        <Card style={{ width: '18rem' }} >
            <Card.Header>{book.title}</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>
                        {book.summary}
                    </p>
                </blockquote>
            </Card.Body>
            <footer ><Link to={"/books/"+book.id} className="btn btn-primary">detail</Link><Link to={"/books/edit/"+book.id} className="btn btn-primary">edit</Link></footer>
        </Card>
    )
}

export default Book;

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Col, Container, Row, Switch} from 'react-bootstrap';


import Header from "./compounents/header";
import { bookService } from "./service/BookService";

import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import DetailsViewBook from "./views/DetailsViewBook";
import BookView from "./compounents/BooklistView";
import AddBookView from "./views/addBoockview";
import editBook from "./views/editBook";


function App() {
    const [books, setBooks] = useState([]);
    const [searchValue, setSearchValue] = useState('');




    useEffect(() => {
        const findBooks = () => {
            bookService.findBooks()
                .then(function (response) {
                    setBooks(response.data);
                });
        };

        const findByTitle = () => {
            bookService.findBooksByTitle(searchValue)
                .then(function (response) {
                    setBooks(response.data);
                });
        };



        const searchBook = () => {
            if(searchValue.length === 0) {
                findBooks();
            } else {
                findByTitle(searchBook);
            }
        };

        searchBook();
    }, [searchValue]);
  return (
      <Router>
          <Container fluid>
              <Row>
                  <Col>
                      <Header/>
                  </Col>
              </Row>
              <Row>
                  <Col>
                      <Container>
                          <Switch>
                              <Route path="/books/add">
                                  <AddBookView />
                              </Route>
                              <Route path="/books/:id"  >
                                  <DetailsViewBook></DetailsViewBook>
                              </Route>
                              <Route path="/books/edit/:id">
                               <editBook></editBook>
                              </Route>

                              <Route path="/books">
                                  <BookView books={books} onSearch={(bookName) => setSearchValue(bookName)}/>
                              </Route>
                          </Switch>
                      </Container>
                  </Col>
              </Row>
          </Container>
      </Router>


  );
}

export default App;

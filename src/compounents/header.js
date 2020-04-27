import {Button, Container, FormControl, InputGroup, Nav, Navbar} from "react-bootstrap";

import React, { useState } from "react";


const Header = ({onSearch}) => {

    const [searchValue, setSearchValue] = useState('');
    const searchBook =() =>{
        onSearch (searchValue);
    };
    const changeTitle = (event) => {
        setSearchValue(event.target.value);
    }
    return(
        <div>
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/books">Books</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="#authors">Authors</Nav.Link>
                    <Nav.Link href="#About">About</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    <br />

    <div>
        <Button variant="primary" size="sm" href={"/books/add"}>
            New Book
        </Button>

    </div>
    <br/>
</div>
    );


}
export default Header;

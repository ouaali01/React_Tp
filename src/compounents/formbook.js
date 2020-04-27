import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

const Bookform = ({handleSubmit,handleChangeForm,book}) => {

return(
    <Container>

        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Title</label>
                <input name="title" type="text" className="form-control" value={book.title}
                       onChange={handleChangeForm}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Language</label>
                <input name="language" type="text" className="form-control" value={book.language}
                       onChange={handleChangeForm}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Number of pages</label>
                <input name="numberOfPages" type="text" className="form-control" value={book.numberOfPages}
                       onChange={handleChangeForm}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Publisher</label>
                <input name="publisher" type="text" className="form-control" value={book.publisher}
                       onChange={handleChangeForm}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Publication date</label>
                <input name="publicationDate" type="text" className="form-control" value={book.publicationDate}
                       onChange={handleChangeForm}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Author</label>
                <input name="author" type="text" className="form-control" value={book.author}
                       onChange={handleChangeForm}/>
            </div>


            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Summary</label>
                <textarea name="summary" className="form-control" id="exampleFormControlTextarea1" rows="3"
                          value={book.sammury} onChange={handleChangeForm}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </Container>);
}


export default Bookform;

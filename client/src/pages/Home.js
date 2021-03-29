import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/form";
import { Link } from "react-router-dom";
import API from "../utils/API";

function Home() {
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  useEffect(() => {
    loadBooks()
  }, [])

  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title) {
      API.saveBook({
        title: formObject.title
      })
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }
  };

  return(
      <div className="container">
          <div className="row">
              <div className="col-md-12">
                  <Jumbotron>
                      <h1>Google Books Search</h1>
                  </Jumbotron>
                  <form className="text-center">
                      <Input 
                        onChange={handleInputChange}
                        name="title"
                        placeholder="Title (required)"
                      />
                      <FormBtn 
                        disabled={!(formObject.title)}
                        onClick={handleFormSubmit}                   
                      >
                        Search Book
                      </FormBtn>
                  </form>
                  {books.length ? (
                    <List>
                      {books.map(book => (
                        <ListItem key={book._id}>
                          <Link to={"/books/" + book._id}>
                            <strong>
                              {book.title} by {book.author}
                            </strong>
                          </Link>
                        </ListItem>
                      ))}
                    </List>
                  ) : (
                    <h3>No Results to Display</h3>
                  )}
              </div>
          </div>
      </div>
  )
};

export default Home;
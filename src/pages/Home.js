import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
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
                      <input 
                        onChange={handleInputChange}
                        name="title"
                        placeholder="Title (required)"
                      />
                      <button 
                        disabled={!(formObject.title)}
                        onClick={handleFormSubmit}                   
                      >
                        Search Book
                      </button>
                  </form>
              </div>
          </div>
      </div>
  )
};

export default Home;
import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/form";

function Home() {
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ [name]: value})
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
                      <FormBtn>
                        Search Book
                      </FormBtn>
                  </form>
              </div>
          </div>
      </div>
  )
};

export default Home;
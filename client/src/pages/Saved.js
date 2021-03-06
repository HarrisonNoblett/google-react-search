import React from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";

function Saved() {
  return(
      <div className="container">
          <div className="row">
              <div className="col-md-12">
                  <Jumbotron>
                      <h1>Google Books Search</h1>
                  </Jumbotron>
              </div>
          </div>
          <div className="row rounded shadow-lg m-5 p-3">
            <div className="col-md-12">
              <p>
                <h2>Title:</h2><h5>Lord of The Rings</h5>
                <hr />
              </p>
              <p>
                <h3>Author:</h3><h5>J. R. R. Tolkien</h5>
                <hr />
              </p>
              <img src="https://upload.wikimedia.org/wikipedia/en/8/8a/The_Lord_of_the_Rings_The_Fellowship_of_the_Ring_%282001%29.jpg" className="img-thumbnail float-left mr-3" alt="Book"></img>
              <p className="lead">The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. Its many worlds and creatures were drawn from Tolkien's extensive knowledge of philology and folklore.</p>
              <DeleteBtn/>
              <button className="btn btn-success mr-1" style={{ float: "right" }}>View</button>
            </div>
          </div>
      </div>
  )
};

export default Saved;
import axios from "axios";
require("dotenv").config();

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = process.env.API_KEY;

export default {
  search: function(query) {
    return axios.get(BASEURL + query.search + APIKEY);
  },
  getBooks: function() {
    return axios.get("/api/books");
  },
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
